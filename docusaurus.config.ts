import * as fs from 'fs';
import * as path from 'path';
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config, Plugin} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// SITE_URL and SITE_ENV are set by scripts/deploy.sh from the target
// environment, and must never be hardcoded. `url` is what the canonical tags,
// the sitemap and the llms-txt output are built from: if a test build carries
// the production URL, the test site tells crawlers that its content is the real
// content - worse than emitting nothing at all.
const siteUrl = process.env.SITE_URL ?? 'http://localhost:3005';
const siteEnv = process.env.SITE_ENV ?? 'local';

/**
 * robots.txt is generated here rather than committed to static/, because
 * anything in static/ ships to every environment. One committed robots.txt
 * means production's `Allow: /` deploys to test as well, and the staging docs
 * get themselves indexed as a duplicate of the real ones.
 *
 * On test this is the second of two layers - the distribution also sends
 * X-Robots-Tag: noindex, which applies to every file and cannot be defeated by
 * a stale robots.txt.
 */
function robotsTxtPlugin(): Plugin {
  return {
    name: 'fiskl-robots-txt',
    async postBuild({outDir}) {
      const body =
        siteEnv === 'prod'
          ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
          : `# ${siteEnv} environment - not for indexing.\nUser-agent: *\nDisallow: /\n`;
      await fs.promises.writeFile(path.join(outDir, 'robots.txt'), body, 'utf8');
    },
  };
}

const config: Config = {
    title: 'Fiskl Help',
    tagline: 'Fiskl accounting',
    favicon: 'img/favicon/favicon.svg',
    markdown: {
        mermaid: true,
    },

    plugins: [
        [
            '@signalwire/docusaurus-plugin-llms-txt',
            {
                siteTitle: 'Fiskl Accounting Documentation',
                content: {
                    enableLlmsFullTxt: true,
                    includeDocs: true,
                    includeBlog: true,
                    includePages: true,
                }
            },
        ],

        // ----------------------------------------------------------------
        // Atlas — second docs instance
        // Source:   docs-atlas/
        // Routes:   /atlas/*
        // Sidebar:  sidebarsAtlas.ts
        // ----------------------------------------------------------------
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'atlas',
                path: 'docs-atlas',
                routeBasePath: 'atlas',
                sidebarPath: './sidebarsAtlas.ts',
            },
        ],

        robotsTxtPlugin,
    ],

    headTags: [
        {
            tagName: 'link',
            attributes: {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: 'anonymous',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap',
            },
        },
    ],

    future: {
        v4: true,
    },

    url: siteUrl,
    baseUrl: '/',

    // Deliberately left unset, and coupled to infra/functions/viewer-request.js.
    //
    // Undefined makes Docusaurus emit every route as <route>/index.html while
    // writing internal links WITHOUT a trailing slash - which is exactly the
    // 281 canonical URLs this site is already indexed under. The edge function
    // rewrites both /page and /page/ to that index.html silently, so no live URL
    // moves and nothing redirects.
    //
    // Changing this breaks that pairing: `false` emits flat page.html files the
    // rewrite would not find. infra/functions/viewer-request.test.js runs on
    // every deploy and will fail loudly if the two ever disagree, but read it
    // before touching this line.
    trailingSlash: undefined,
    organizationName: 'Fiskl',
    projectName: 'Fiskl Accounting',
    onBrokenLinks: 'warn',

    themes: [
        '@docusaurus/theme-mermaid',
        [
            '@easyops-cn/docusaurus-search-local',
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                hashed: true,
                language: ["en"],
                indexDocs: true,
                indexBlog: true,
                indexPages: true,
                blogRouteBasePath: '/updates',
                blogDir: 'updates',
                // Index both docs instances
                docsRouteBasePath: ['/', '/atlas'],
                docsDir: ['docs', 'docs-atlas'],
            }),
        ],
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    routeBasePath: '/',
                },
                blog: {
                    path: 'updates',
                    routeBasePath: 'updates',
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/fi/fi-ai.svg',
        colorMode: {
            respectPrefersColorScheme: true,
        },
        mermaid: {
            options: {
                layout: 'elk',
            },
        },
        // Site-wide default TOC depth. Pages can still override with the
        // toc_min_heading_level / toc_max_heading_level frontmatter fields.
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 2,
        },
        navbar: {
            title: 'Fiskl Help',
            logo: {
                alt: 'Fiskl',
                src: 'img/fiskl-logomark.png',
            },
            items: [
                // ── Fiskl docs (default instance) ──
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Fiskl',
                },
                // ── Atlas docs (second instance) ──
                {
                    type: 'docSidebar',
                    sidebarId: 'atlasSidebar',
                    docsPluginId: 'atlas',
                    position: 'left',
                    label: 'Atlas',
                },
                {
                    to: '/updates',
                    label: 'Updates',
                    position: 'right'
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                    className: 'navbar-language-picker',
                },
                {
                    href: 'https://app.fiskl.com',
                    label: 'Go to App',
                    position: 'right',
                    className: 'navbar-cta-button',
                },
            ],
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Fiskl Accounting',
                            to: '/',
                        },
                        {
                            label: 'Fiskl Atlas',
                            to: '/atlas',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Facebook',
                            href: 'https://www.facebook.com/FisklAI/',
                        },
                        {
                            label: 'Youtube',
                            href: 'http://www.youtube.com/@fiskl',
                        },
                        {
                            label: 'X',
                            href: 'https://x.com/FisklAI',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Updates',
                            to: '/updates',
                        },
                        {
                            label: 'Fiskl.com',
                            href: 'https://fiskl.com',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Fiskl Accounting`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.oneDark,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;