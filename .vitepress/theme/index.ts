/*
 * docs.axiu.uno 主题入口
 * 继承 VitePress 默认主题，注入自定义样式
 */

import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
}
