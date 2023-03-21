import { defineConfig } from 'vitepress'
import { getSidebar } from './config/sidebar'
import { getNav } from './config/nav'

export default defineConfig({
	title: 'vue3组件库站点',
	themeConfig: {
		nav: getNav(),
		sidebar: getSidebar()
	}
})
