import { defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RuyiSDK PMD",
  description: "RuyiSDK PMD",
  lastUpdated: true,
  locales: {
    root: {
      label: '产品需求',
      link: '/process/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/process/' },
          { text: '文档', link: '/process/intro/' }
        ],
        sidebar: [
          { text: '产品介绍', 
            items: [
              { text: 'RUYISDK 简介', link: '/process/intro/' },
              { text: '版本规划路线图', link: '/process/plan/' },
              { text: '24.06版本计划', link: '/process/plan/24.06' }
            ]
          },
          { text: '需求定义',
            link: '', 
            items: [
              {
                text: '总体需求与设计',
                items: [
                  { text: '产品介绍', link: '/process/require/' },
                  { text: 'V0.2', link: '/process/require/v0.2' },
                  { text: 'tools', link: '/process/require/ide-tools' }
                ]
              },
              {
                text: 'RUYI 包管理器',
                items: [
                ]
              },
              {
                text: 'RUYI 集成开发环境',
                items: [
                ]
              },
              {
                text: 'RUYI 开发者社区',
                items: [
                ]
              }
            ]
          }
        ]
      }
    }
  },
  base: '/ruyi-pmd/',
  ignoreDeadLinks: true,
  themeConfig: {
    i18nRouting: true,
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ruyisdk/' }
    ]
  }
})
