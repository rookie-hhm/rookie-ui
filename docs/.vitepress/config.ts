import { defineConfig } from 'vitepress'
import sidebar from './config/sidebar'
import nav from './config/nav'

export default defineConfig({
  appearance: true,
  themeConfig: {
    sidebar,
    nav
  }
})