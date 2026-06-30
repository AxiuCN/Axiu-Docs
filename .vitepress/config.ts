/*
 * docs.axiu.uno VitePress 站点配置
 */

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Axiu Docs',
  description: '阿修Axiu 社区手册',
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
            { text: '基础功能', link: '/guide/yunzai/basic' },
            { text: '进阶功能', link: '/guide/yunzai/advanced' },
                                                            { text: '插件列表', collapsed: true, items: [
              { text: '概览', link: '/guide/yunzai/plugins/' },
              { text: '系统插件', link: '/guide/yunzai/plugins/system' },
              { text: '工具插件', link: '/guide/yunzai/plugins/other' },
              { text: '示例插件', link: '/guide/yunzai/plugins/example' },
              { text: 'atlas', link: '/guide/yunzai/plugins/atlas' },
              { text: 'Axiu-Plugin', link: '/guide/yunzai/plugins/Axiu-Plugin' },
              { text: 'GamePush-Plugin', link: '/guide/yunzai/plugins/GamePush-Plugin' },
              { text: 'genshin', link: '/guide/yunzai/plugins/genshin' },
              { text: 'Git-Plugin', link: '/guide/yunzai/plugins/Git-Plugin' },
              { text: 'Guoba-Plugin', link: '/guide/yunzai/plugins/Guoba-Plugin' },
              { text: 'LinkFlow-Plugin', link: '/guide/yunzai/plugins/LinkFlow-Plugin' },
              { text: 'Lotus-Plugin', link: '/guide/yunzai/plugins/Lotus-Plugin' },
              { text: 'loveMys-plugin', link: '/guide/yunzai/plugins/loveMys-plugin' },
              { text: 'mcsmanager-plugin', link: '/guide/yunzai/plugins/mcsmanager-plugin' },
              { text: 'mctool-plugin', link: '/guide/yunzai/plugins/mctool-plugin' },
              { text: 'miao-plugin', link: '/guide/yunzai/plugins/miao-plugin' },
              { text: 'ProfileImg-Plugin', link: '/guide/yunzai/plugins/ProfileImg-Plugin' },
              { text: 'TianRu-plugin', link: '/guide/yunzai/plugins/TianRu-plugin' },
              { text: 'xiaoyao-cvs-plugin', link: '/guide/yunzai/plugins/xiaoyao-cvs-plugin' },
              { text: 'xitian-plugin', link: '/guide/yunzai/plugins/xitian-plugin' },
              { text: 'ZZZ-Plugin', link: '/guide/yunzai/plugins/ZZZ-Plugin' },
            ], },
            { text: '使用须知', link: '/guide/yunzai/notes' },
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
    footer: { message: '© 2026 阿修Axiu · Axiu Network · 闽ICP备2026017611号-1' },

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
