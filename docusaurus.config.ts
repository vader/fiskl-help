import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Fiskl Help',
    tagline: 'Fiskl accounting',
    favicon: 'img/favicon/favicon-32x32.png',
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
                    includeDocs: true,   // Indexes core documentation (docs/ folder)
                    includeBlog: true,   // Indexes posts (updates/ folder)
                    includePages: true,  // Indexes standalone pages like the homepage (src/pages/ folder)
                }
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
        v4: true, // Improves compatibility with upcoming Docusaurus v4
    },

    url: 'https://help.fiskl.com',
    baseUrl: '/',
    organizationName: 'Fiskl',
    projectName: 'Fiskl Accounting',
    onBrokenLinks: 'throw',

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
                // Maps the search indexer to the custom updates directory
                blogRouteBasePath: '/updates',
                blogDir: 'updates',
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
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    to: '/updates',
                    label: 'Updates',
                    position: 'right'
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                    className: 'navbar-language-picker', // Custom class for CSS targeting
                },
                {
                    href: 'https://app.fiskl.com',
                    label: 'Go to App',
                    position: 'right',
                    className: 'navbar-cta-button', // Custom class for CSS targeting
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Documentation',
                            to: '/',
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
                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Fiskl Accounting`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;