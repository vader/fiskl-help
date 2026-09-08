// CloudFront Function (viewer-request) for the Fiskl help site distribution.
//
// CloudFront permits exactly ONE viewer-request function per cache behaviour,
// so the staging Basic Auth gate and the directory -> index.html rewrite that a
// private S3/OAC origin requires must live in the same function.
//
// The BASIC AUTH block between the markers is stripped at synth time for
// environments that do not gate access (see infra/lib/help-site-stack.ts).
// The credential is injected at deploy time from SSM - it is never committed.
//
// WHY THE REWRITE IS NEEDED AT ALL
// A private bucket behind Origin Access Control is reached over S3's REST
// endpoint, which serves objects by exact key and has no concept of
// "directory -> index.html". That behaviour exists only on S3's static website
// hosting endpoint, which is public and which OAC deliberately bypasses. So a
// request for /getting-started/importing-data looks for an object literally
// keyed "getting-started/importing-data", finds nothing, and 403s.
//
// If this function is ever missing or unassociated, the homepage still works -
// defaultRootObject covers "/" - and every other route 403s. That makes it look
// like a content or permissions problem rather than a routing one.
//
// WHY BOTH URL FORMS ARE REWRITTEN RATHER THAN REDIRECTED
// This differs deliberately from the marketing site, which 301s extensionless
// paths to a trailing slash. The help site is already live and indexed with 281
// slash-less canonical URLs (/getting-started/as-a-business-owner), and
// Docusaurus is inconsistent about it: content pages canonicalise WITHOUT a
// trailing slash while plugin roots (/atlas/, /) canonicalise WITH one. No
// single redirect rule matches both, and any rule we picked would leave some
// canonical tag pointing at a URL that redirects away.
//
// So both forms are rewritten silently and both return 200, which is exactly
// how Netlify serves the site today. The canonical tag Docusaurus emits is what
// resolves the duplication for search engines - it already does that job now.
// Normalising to one URL form is a deliberate SEO decision for later, not
// something to bundle into an infrastructure migration.
//
// Written in ES5-safe JavaScript. The CloudFront Functions runtime is not a
// full modern JS environment; avoid includes, endsWith, template literals and
// arrow functions rather than discovering which are supported.

function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // --- BASIC_AUTH_START ---
    // The auth check comes first, so the 401 applies to every path - including
    // ones that would otherwise be rewritten below.
    var expected = 'Basic __BASIC_AUTH_B64__';
    var auth = request.headers.authorization;
    if (!auth || auth.value !== expected) {
        return {
            statusCode: 401,
            statusDescription: 'Unauthorized',
            headers: {
                'www-authenticate': { value: 'Basic realm="Fiskl help (test)"' },
                'cache-control': { value: 'no-store' }
            }
        };
    }
    // --- BASIC_AUTH_END ---

    var lastSegment = uri.substring(uri.lastIndexOf('/') + 1);

    // "/" or "/atlas/" -> append index.html for the S3 REST origin.
    if (lastSegment === '') {
        request.uri = uri + 'index.html';
        return request;
    }

    // "/getting-started/importing-data" -> ".../importing-data/index.html".
    // A silent rewrite, not a redirect: see the note above. Docusaurus emits
    // every route as a directory containing index.html, so the key exists.
    if (lastSegment.indexOf('.') === -1) {
        request.uri = uri + '/index.html';
        return request;
    }

    // Anything with an extension passes through untouched: the fingerprinted
    // assets, the images, sitemap.xml, llms.txt, search-index.json, and the raw
    // .md files the llms-txt plugin emits for AI crawlers.
    return request;
}
