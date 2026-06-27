/*
 * docs.axiu.uno VitePress 站点配置
 */

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Axiu Docs',
  description: '阿修Axiu 个人文档中心',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  /* 排除非文档文件 */
  srcExclude: ['**/CLAUDE.md', '**/README.md'],

  /* 始终使用深色主题 */
  appearance: 'dark',

  themeConfig: {
    /* 顶栏导航 */
    nav: [
      { text: '首页', link: '/' },
      { text: 'Yunzai', link: '/guide/yunzai/' },
      { text: 'MCSManager', link: '/guide/mcsm/' },
      { text: '运维', link: '/ops/' },
      { text: '项目', link: '/projects/' },
    ],

    /* 侧边栏（按路径分组） */
    sidebar: {
      '/guide/yunzai/': [
        {
          text: 'TRSS-Yunzai',
          items: [
            { text: '概览', link: '/guide/yunzai/' },
            { text: '部署安装', link: '/guide/yunzai/install' },
            { text: '配置说明', link: '/guide/yunzai/config' },
            { text: '插件指南', link: '/guide/yunzai/plugins' },
          ],
        },
      ],
      '/guide/mcsm/': [
        {
          text: 'MCSManager',
          items: [
            { text: '概览', link: '/guide/mcsm/' },
            { text: '面板操作', link: '/guide/mcsm/usage' },
          ],
        },
      ],
      '/ops/': [
        {
          text: '运维记录',
          items: [
            { text: '概览', link: '/ops/' },
          ],
        },
      ],
      '/projects/': [
        {
          text: '个人项目',
          items: [
            { text: '概览', link: '/projects/' },
          ],
        },
      ],
    },

    /* 社交链接 */
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AxiuCN' },
    ],

    /* 页脚 */
    footer: {
      message: 'Axiu Network',
      copyright: '© 2026 阿修Axiu',
    },

    /* 搜索 */
    search: {
      provider: 'local',
    },

    /* 编辑链接 */
    editLink: {
      pattern: 'https://github.com/AxiuCN/Axiu-Docs/edit/master/:path',
      text: '在 GitHub 上编辑此页',
    },
  },
})
