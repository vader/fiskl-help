// Runs the edge function over the real build output and checks that every URL
// it produces resolves to an object that actually exists.
//
//   node infra/functions/viewer-request.test.js
//
// This is the check that catches the failure the runbook warns about: a
// mismatch between the rewrite rule and the layout Docusaurus emits, which
// shows up as 403s on some routes and not others. The homepage works even when
// the function is completely broken, so testing the homepage proves nothing.
//
// Run it after any Docusaurus upgrade or trailingSlash change.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const BUILD = path.join(__dirname, '..', '..', 'build');
const SOURCE = path.join(__dirname, 'viewer-request.js');
const AUTH_BLOCK = /[ \t]*\/\/ --- BASIC_AUTH_START ---[\s\S]*?\/\/ --- BASIC_AUTH_END ---\n/;

if (!fs.existsSync(BUILD)) {
  console.error('No build/ directory. Run `npm run build` at the repo root first.');
  process.exit(1);
}

// Load the public (prod) variant: auth stripped, routing intact.
const context = { console };
vm.createContext(context);
vm.runInContext(fs.readFileSync(SOURCE, 'utf8').replace(AUTH_BLOCK, ''), context);
const handler = context.handler;

const call = (uri) => handler({ request: { uri, querystring: {}, headers: {} } });

// --- Collect what the build actually contains --------------------------------
const routes = [];   // directories that hold an index.html -> real pages
const files = [];    // everything else -> must pass through untouched
(function walk(dir, prefix) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  if (entries.some((e) => e.isFile() && e.name === 'index.html')) {
    routes.push(prefix === '' ? '/' : prefix);
  }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, prefix + '/' + e.name);
    else if (e.name !== 'index.html') files.push(prefix + '/' + e.name);
  }
})(BUILD, '');

const exists = (uri) => fs.existsSync(path.join(BUILD, uri));
const failures = [];
const check = (label, uri, expectKey) => {
  const res = call(uri);
  const key = res.uri !== undefined ? res.uri : `HTTP ${res.statusCode}`;
  if (key !== expectKey) failures.push(`${label}: ${uri} -> ${key}, expected ${expectKey}`);
  else if (res.uri !== undefined && !exists(res.uri)) failures.push(`${label}: ${uri} -> ${key} (NO SUCH OBJECT)`);
};

// 1. Slash-less form - the live canonical URLs. Must rewrite, never redirect.
for (const r of routes) {
  if (r === '/') continue;
  check('slash-less route', r, r + '/index.html');
}

// 2. Trailing-slash form - inbound links and the /atlas/, / canonicals.
for (const r of routes) check('trailing-slash route', r.replace(/\/?$/, '/'), r.replace(/\/?$/, '/') + 'index.html');

// 3. Files WITH an extension pass through byte-identical.
const extensionless = files.filter((f) => f.lastIndexOf('.') <= f.lastIndexOf('/'));
for (const f of files) {
  if (extensionless.indexOf(f) === -1) check('file passthrough', f, f);
}

// 4. Files with NO extension are indistinguishable from a route, so they get
//    rewritten to <name>/index.html and 404. That is intended, not a bug: the
//    only such files are build artifacts from other hosts - static/_headers is
//    Netlify's and must stay in the repo until Netlify is switched off, but it
//    has no business being served from CloudFront. Assert they are unreachable
//    rather than silently public.
for (const f of extensionless) {
  const res = call(f);
  if (res.uri === f) failures.push(`extensionless artifact ${f} is being served verbatim`);
  else if (exists(res.uri)) failures.push(`extensionless artifact ${f} resolved to a real object: ${res.uri}`);
}

// 5. A URL that does not exist must produce a key that does not exist, so
//    CloudFront's 403/404 error responses serve the real 404 page.
const missing = call('/definitely-not-a-page').uri;
if (exists(missing)) failures.push(`bad URL /definitely-not-a-page mapped to an existing object: ${missing}`);

// 6. Nothing may ever redirect: a 3xx here means the canonical URLs moved.
for (const uri of ['/', '/atlas', '/atlas/', '/getting-started/importing-data', '/llms.txt']) {
  const res = call(uri);
  if (res.statusCode) failures.push(`${uri} returned HTTP ${res.statusCode} - the function must only rewrite`);
}

// --- Report ------------------------------------------------------------------
console.log(`routes checked : ${routes.length} (both URL forms = ${routes.length * 2 - 1} requests)`);
console.log(`files checked  : ${files.length} (${extensionless.length} extensionless, expected unreachable)`);
if (failures.length) {
  console.error(`\n${failures.length} FAILURE(S):`);
  for (const f of failures.slice(0, 25)) console.error('  ' + f);
  if (failures.length > 25) console.error(`  ... and ${failures.length - 25} more`);
  process.exit(1);
}
console.log('\nAll routes and files resolve to objects that exist. No redirects.');
