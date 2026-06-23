import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

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

    url: 'https://help.fiskl.com',
    baseUrl: '/',
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
        navbar: {
            title: 'Fiskl Help',
            logo: {
                alt: 'Fiskl Accounting',
                src: 'img/fi/fi-ai.svg',
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