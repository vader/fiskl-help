import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

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
                    includeDocs: true,
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
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://help.fiskl.com',
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Fiskl', // Usually your GitHub org/user name.
    projectName: 'Fiskl Accounting', // Usually your repo name.

    onBrokenLinks: 'throw',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr', 'es'],
        localeConfigs: {
            en: {
                htmlLang: 'en-GB',
            }
        },
    },

    themes: ['@docusaurus/theme-mermaid'],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // Useful options to enforce blogging best practices
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
        // Replace with your project's social card
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
                // Items moved to the right for a modern utility-bar look
                { to: '/blog', label: 'Updates', position: 'right' },
                {
                    type: 'localeDropdown',
                    position: 'right',
                    className: 'navbar-language-picker', // custom class for styling
                },
                {
                    href: 'https://app.fiskl.com', // Link to your actual app
                    label: 'Go to App',
                    position: 'right',
                    className: 'navbar-cta-button', // custom class for the button look
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
                            to: '/docs/intro',
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
                            label: 'Blog',
                            to: '/blog',
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
