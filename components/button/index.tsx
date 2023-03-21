import { useStyleRegister } from '@antd-tiny-vue/cssinjs'
import type { CSSInterpolation } from '@antd-tiny-vue/cssinjs'
import { computed, defineComponent } from 'vue'
import { useToken } from '../theme'
import type { ThemeToken } from '../theme'
/**
 *
 * @param prefixCls 类名前缀
 * @param token ThemeToken
 * @returns 初始化样式
 */
export const genarateButtonStyle = (prefixCls: string, token: ThemeToken): CSSInterpolation => ({
	[`.${prefixCls}`]: {
		backgroundColor: token.primaryColor,
		padding: '10px 20px',
		'&:hover': {
			backgroundColor: 'greenyellow'
		}
	}
})

const Button = defineComponent({
	name: 'ZButton',
	setup() {
		const prefixCls = 'ant-btn'
		const [theme, token, hashId] = useToken()
		const info = computed<any>(() => ({
			theme: theme.value,
			token: token.value,
			path: [prefixCls],
			hashId: hashId.value
		}))
		const wrapSSR = useStyleRegister(info, () => [genarateButtonStyle(prefixCls, token.value as any)])
		return () => wrapSSR(<button class={[prefixCls, hashId.value]}>按钮</button>)
	}
})

export default Button
