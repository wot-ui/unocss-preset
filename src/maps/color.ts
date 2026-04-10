/**
 * 语义颜色映射（默认启用）
 * key: UnoCSS token name (去掉 prefix 后的部分)
 * value: CSS 变量引用
 */
export const SEMANTIC_COLOR_MAP: Record<string, string> = {
  // 主色
  'primary': 'var(--wot-primary-6)',
  'primary-1': 'var(--wot-primary-1)',
  'primary-2': 'var(--wot-primary-2)',
  'primary-3': 'var(--wot-primary-3)',
  'primary-4': 'var(--wot-primary-4)',
  'primary-5': 'var(--wot-primary-5)',
  'primary-6': 'var(--wot-primary-6)',
  'primary-7': 'var(--wot-primary-7)',
  'primary-8': 'var(--wot-primary-8)',
  'primary-9': 'var(--wot-primary-9)',
  'primary-10': 'var(--wot-primary-10)',
  // 危险色
  'danger': 'var(--wot-danger-main)',
  'danger-main': 'var(--wot-danger-main)',
  'danger-hover': 'var(--wot-danger-hover)',
  'danger-clicked': 'var(--wot-danger-clicked)',
  'danger-disabled': 'var(--wot-danger-disabled)',
  'danger-particular': 'var(--wot-danger-particular)',
  'danger-surface': 'var(--wot-danger-surface)',
  // 成功色
  'success': 'var(--wot-success-main)',
  'success-main': 'var(--wot-success-main)',
  'success-hover': 'var(--wot-success-hover)',
  'success-clicked': 'var(--wot-success-clicked)',
  'success-disabled': 'var(--wot-success-disabled)',
  'success-particular': 'var(--wot-success-particular)',
  'success-surface': 'var(--wot-success-surface)',
  // 警告色
  'warning': 'var(--wot-warning-main)',
  'warning-main': 'var(--wot-warning-main)',
  'warning-hover': 'var(--wot-warning-hover)',
  'warning-clicked': 'var(--wot-warning-clicked)',
  'warning-disabled': 'var(--wot-warning-disabled)',
  'warning-particular': 'var(--wot-warning-particular)',
  'warning-surface': 'var(--wot-warning-surface)',
  // 文字
  'text-main': 'var(--wot-text-main)',
  'text-secondary': 'var(--wot-text-secondary)',
  'text-auxiliary': 'var(--wot-text-auxiliary)',
  'text-disabled': 'var(--wot-text-disabled)',
  'text-placeholder': 'var(--wot-text-placeholder)',
  'text-white': 'var(--wot-text-white)',
  // 图标
  'icon-main': 'var(--wot-icon-main)',
  'icon-secondary': 'var(--wot-icon-secondary)',
  'icon-auxiliary': 'var(--wot-icon-auxiliary)',
  'icon-disabled': 'var(--wot-icon-disabled)',
  'icon-placeholder': 'var(--wot-icon-placeholder)',
  'icon-white': 'var(--wot-icon-white)',
  // 边框
  'border-extra-strong': 'var(--wot-border-extra-strong)',
  'border-strong': 'var(--wot-border-strong)',
  'border-main': 'var(--wot-border-main)',
  'border-light': 'var(--wot-border-light)',
  'border-white': 'var(--wot-border-white)',
  'border-zero': 'var(--wot-border-zero)',
  // 填充
  'filled-extra-strong': 'var(--wot-filled-extra-strong)',
  'filled-strong': 'var(--wot-filled-strong)',
  'filled-content': 'var(--wot-filled-content)',
  'filled-bottom': 'var(--wot-filled-bottom)',
  'filled-oppo': 'var(--wot-filled-oppo)',
  'filled-zero': 'var(--wot-filled-zero)',
  // 分割线
  'divider-main': 'var(--wot-divider-main)',
  'divider-light': 'var(--wot-divider-light)',
  'divider-strong': 'var(--wot-divider-strong)',
  'divider-white': 'var(--wot-divider-white)',
  // 反馈
  'feedback-hover': 'var(--wot-feedback-hover)',
  'feedback-active': 'var(--wot-feedback-active)',
  'feedback-accent': 'var(--wot-feedback-accent)',
  // 填充色-透明度
  'opacfilled-tooltip-toast-cover': 'var(--wot-opacfilled-tooltip-toast-cover)',
  'opacfilled-main-cover': 'var(--wot-opacfilled-main-cover)',
  'opacfilled-light-cover': 'var(--wot-opacfilled-light-cover)',
  // Picker View Mask
  'picker-view-mask-start': 'var(--wot-picker-view-mask-start-color)',
  'picker-view-mask-end': 'var(--wot-picker-view-mask-end-color)',
  // 分类色
  'classify-yellow-bg': 'var(--wot-classifyapplication-yellow-background)',
  'classify-yellow-border': 'var(--wot-classifyapplication-yellow-border)',
  'classify-yellow-content': 'var(--wot-classifyapplication-yellow-content)',
  'classify-cyan-bg': 'var(--wot-classifyapplication-cyan-background)',
  'classify-cyan-border': 'var(--wot-classifyapplication-cyan-border)',
  'classify-cyan-content': 'var(--wot-classifyapplication-cyan-content)',
  'classify-purple-bg': 'var(--wot-classifyapplication-purple-background)',
  'classify-purple-border': 'var(--wot-classifyapplication-purple-border)',
  'classify-purple-content': 'var(--wot-classifyapplication-purple-content)',
  'classify-grape-bg': 'var(--wot-classifyapplication-grape-background)',
  'classify-grape-border': 'var(--wot-classifyapplication-grape-border)',
  'classify-grape-content': 'var(--wot-classifyapplication-grape-content)',
  'classify-pink-bg': 'var(--wot-classifyapplication-pink-background)',
  'classify-pink-border': 'var(--wot-classifyapplication-pink-border)',
  'classify-pink-content': 'var(--wot-classifyapplication-pink-content)',
}

/**
 * 基础色板映射（baseTokens: true 时启用）
 * key: UnoCSS token name
 * value: CSS 变量引用
 */
export const BASE_COLOR_MAP: Record<string, string> = {
  'base-black': 'var(--wot-base-black)',
  'base-white': 'var(--wot-base-white)',
  'base-transparent': 'var(--wot-base-transparent)',
}

const COLOR_FAMILIES = [
  'blue',
  'lightblue',
  'pink',
  'red',
  'volcano',
  'orange',
  'yellow',
  'green',
  'cyan',
  'purple',
  'grape',
  'coolgrey',
  'neutralgrey',
  'warmgrey',
] as const

for (const family of COLOR_FAMILIES) {
  for (let i = 1; i <= 10; i++) {
    BASE_COLOR_MAP[`${family}-${i}`] = `var(--wot-${family}-${i})`
  }
  // opac variants (not for greys)
  if (!family.endsWith('grey')) {
    BASE_COLOR_MAP[`${family}-opac`] = `var(--wot-${family}-opac)`
  }
}

// opac / opacwhite scales
const OPAC_STEPS = ['1_02', '2_04', '3_08', '4_15', '5_20', '6_30', '7_45', '7_55', '8_65', '9_75', '10_85'] as const
for (const step of OPAC_STEPS) {
  BASE_COLOR_MAP[`opac-${step}`] = `var(--wot-opac-${step})`
  BASE_COLOR_MAP[`opacwhite-${step}`] = `var(--wot-opacwhite-${step})`
}
