export interface PresetWotOptions {
  /** 工具类前缀，默认 'w'，放在最前面作为命名空间，设 '' 去除前缀 */
  prefix?: string
  /** 是否注入 CSS 变量 preflight，默认 true */
  preflight?: boolean
  /** 是否启用基础变量（色板、number 等）的工具类映射，默认 false */
  baseTokens?: boolean
}
