# @wot-ui/unocss-preset

专为 wot-ui 打造的 UnoCSS 预设，内置主题变量、语义色、间距、圆角、字重、透明度、描边和排版相关原子类规则。

## 安装

```bash
pnpm add -D unocss
pnpm add @wot-ui/unocss-preset
```

## 使用

```ts
import { presetWot } from '@wot-ui/unocss-preset'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetWot(),
  ],
})
```

## 配置项

```ts
presetWot({
  prefix: 'wot',
  preflight: true,
  baseTokens: false,
})
```

- `prefix`: 工具类前缀，默认是 `wot`，例如 `wot-text-primary`、`wot-m-main`
- `preflight`: 是否自动注入 wot-ui CSS 变量，默认开启
- `baseTokens`: 是否开放基础色板和原始 token 类名，默认关闭

## 提供的规则

- 颜色：`wot-text-primary`、`wot-bg-danger-surface`、`wot-border-border-main`
- 间距：`wot-m-main`、`wot-gap-tight`、`wot-gap-x-loose`
- 内边距：`wot-p-main`、`wot-px-tight`、`wot-pb-loose`
- 圆角：`wot-rounded-md`、`wot-rounded-full`
- 字重：`wot-font-medium`、`wot-font-semibold`
- 排版：`wot-text-body-main`、`wot-text-title-large`
- 透明度：`wot-opacity-disabled`
- 描边：`wot-border-stroke-main`

## 可用变量值

以下为各类原子类支持的主要变量值，使用时将它们拼接到对应规则后即可。

### 颜色类

- 适用前缀：`wot-text-*`、`wot-bg-*`、`wot-border-*`
- 主色：`primary`、`primary-1` ~ `primary-10`
- 危险色：`danger`、`danger-main`、`danger-hover`、`danger-clicked`、`danger-disabled`、`danger-particular`、`danger-surface`
- 成功色：`success`、`success-main`、`success-hover`、`success-clicked`、`success-disabled`、`success-particular`、`success-surface`
- 警告色：`warning`、`warning-main`、`warning-hover`、`warning-clicked`、`warning-disabled`、`warning-particular`、`warning-surface`
- 文字色：`text-main`、`text-secondary`、`text-auxiliary`、`text-disabled`、`text-placeholder`、`text-white`
- 图标色：`icon-main`、`icon-secondary`、`icon-auxiliary`、`icon-disabled`、`icon-placeholder`、`icon-white`
- 边框色：`border-extra-strong`、`border-strong`、`border-main`、`border-light`、`border-white`、`border-zero`
- 填充色：`filled-extra-strong`、`filled-strong`、`filled-content`、`filled-bottom`、`filled-oppo`、`filled-zero`
- 分割线：`divider-main`、`divider-light`、`divider-strong`、`divider-white`
- 反馈色：`feedback-hover`、`feedback-active`、`feedback-accent`
- 半透明填充：`opacfilled-tooltip-toast-cover`、`opacfilled-main-cover`、`opacfilled-light-cover`
- Picker View Mask：`picker-view-mask-start`、`picker-view-mask-end`
- 分类色：`classify-yellow-bg`、`classify-yellow-border`、`classify-yellow-content`、`classify-cyan-bg`、`classify-cyan-border`、`classify-cyan-content`、`classify-purple-bg`、`classify-purple-border`、`classify-purple-content`、`classify-grape-bg`、`classify-grape-border`、`classify-grape-content`、`classify-pink-bg`、`classify-pink-border`、`classify-pink-content`

示例：

- `wot-text-primary`
- `wot-bg-filled-oppo`
- `wot-border-border-main`
- `wot-bg-classify-purple-content`

### 间距类

- 适用前缀：`wot-m-*`、`wot-mx-*`、`wot-my-*`、`wot-mt-*`、`wot-mr-*`、`wot-mb-*`、`wot-ml-*`、`wot-gap-*`、`wot-gap-x-*`、`wot-gap-y-*`
- 可用值：`zero`、`ultra-tight`、`super-tight`、`extra-tight`、`tight`、`main`、`loose`、`extra-loose`、`super-loose`、`ultra-loose`、`spacious`、`extra-spacious`、`super-spacious`、`ultra-spacious`

示例：

- `wot-m-main`
- `wot-mt-tight`
- `wot-gap-x-loose`

### 内边距类

- 适用前缀：`wot-p-*`、`wot-px-*`、`wot-py-*`、`wot-pt-*`、`wot-pr-*`、`wot-pb-*`、`wot-pl-*`
- 可用值：`zero`、`ultra-tight`、`super-tight`、`extra-tight`、`tight`、`main`、`loose`、`extra-loose`、`super-loose`、`ultra-loose`、`spacious`、`extra-spacious`、`super-spacious`、`ultra-spacious`

示例：

- `wot-p-main`
- `wot-px-tight`
- `wot-pb-loose`

### 圆角类

- 适用前缀：`wot-rounded-*`
- 可用值：`zero`、`sm`、`md`、`lg`、`xl`、`2xl`、`3xl`、`full`

示例：

- `wot-rounded-md`
- `wot-rounded-full`

### 字重类

- 适用前缀：`wot-font-*`
- 可用值：`ultra-light`、`thin`、`light`、`regular`、`medium`、`semibold`、`bold`

示例：

- `wot-font-medium`
- `wot-font-semibold`

### 排版类

- 适用前缀：`wot-text-*`
- Title：`title-main`、`title-large`、`title-extra-large`
- Body：`body-main`、`body-large`、`body-extra-large`、`body-super-large`、`body-ultra-large`
- Label：`label-super-small`、`label-extra-small`、`label-small`、`label-main`、`label-large`

示例：

- `wot-text-body-main`
- `wot-text-title-large`
- `wot-text-label-large`

### 透明度类

- 适用前缀：`wot-opacity-*`
- 可用值：`disabled`、`dimmer`、`overlay`、`main`、`backdrop`

示例：

- `wot-opacity-disabled`
- `wot-opacity-main`

### 描边类

- 适用前缀：`wot-border-stroke-*`
- 可用值：`zero`、`light`、`main`、`bold`

示例：

- `wot-border-stroke-main`
- `wot-border-stroke-bold`

### baseTokens 开启后可用

当 `baseTokens: true` 时，会额外开放基础色板与原始 token。

- 基础色：`base-black`、`base-white`、`base-transparent`
- 色阶家族：`blue-*`、`lightblue-*`、`pink-*`、`red-*`、`volcano-*`、`orange-*`、`yellow-*`、`green-*`、`cyan-*`、`purple-*`、`grape-*`、`coolgrey-*`、`neutralgrey-*`、`warmgrey-*`
- 色阶范围：每个家族支持 `1` ~ `10`
- 非 grey 家族额外支持：`*-opac`
- 透明阶：`opac-1_02`、`opac-2_04`、`opac-3_08`、`opac-4_15`、`opac-5_20`、`opac-6_30`、`opac-7_45`、`opac-7_55`、`opac-8_65`、`opac-9_75`、`opac-10_85`
- 白色透明阶：`opacwhite-1_02`、`opacwhite-2_04`、`opacwhite-3_08`、`opacwhite-4_15`、`opacwhite-5_20`、`opacwhite-6_30`、`opacwhite-7_45`、`opacwhite-7_55`、`opacwhite-8_65`、`opacwhite-9_75`、`opacwhite-10_85`

示例：

- `wot-bg-base-black`
- `wot-text-blue-6`
- `wot-border-opac-3_08`

## 导出内容

包默认导出 `presetWot`，并额外导出以下 token maps，便于业务侧复用：

- `SEMANTIC_COLOR_MAP`
- `BASE_COLOR_MAP`
- `SPACING_MAP`
- `PADDING_MAP`
- `RADIUS_MAP`
- `FONT_WEIGHT_MAP`
- `TYPOGRAPHY_MAP`
- `OPACITY_MAP`
- `STROKE_MAP`

## 开发

```bash
pnpm build
pnpm test
pnpm typecheck
```

## License

[MIT](./LICENSE.md)
