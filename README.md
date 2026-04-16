# @wot-ui/unocss-preset

专为 wot-ui 打造的 UnoCSS 预设，内置主题变量、语义色、间距、圆角、字重、透明度、描边和排版相关原子类规则。

## 这是什么

`@wot-ui/unocss-preset` 是一个给 `UnoCSS` 使用的预设包，目标是把 `wot-ui` 的设计 token 和主题变量映射成可直接使用的原子类。

它主要解决两件事：

| 作用 | 说明 |
| --- | --- |
| 统一设计 token | 把 `wot-ui` 里的颜色、间距、圆角、字重、排版、透明度、描边等 token 暴露为统一的 UnoCSS 类名 |
| 降低样式接入成本 | 业务项目不需要手写大量 CSS 变量映射，直接使用 `wot-` 前缀原子类即可完成样式编排 |

接入后，你可以直接在模板里写出类似下面的类名：

```html
<view class="wot-bg-filled-oppo wot-rounded-xl wot-p-loose">
  <text class="wot-text-title-large wot-text-text-main wot-font-semibold">
    Wot UI UnoCSS Preset
  </text>
</view>
```

## 适合谁用

- 已经在项目里使用 `UnoCSS`
- 希望直接复用 `wot-ui` 的设计 token 和主题变量
- 希望通过原子类快速完成 uni-app / Vue 页面样式搭建

## 它是怎么工作的

这个预设在运行时主要提供三部分能力：

| 能力 | 说明 |
| --- | --- |
| `theme` | 把 `wot-ui` 语义色和基础色映射到 UnoCSS theme，供颜色类规则使用 |
| `rules` | 生成 `wot-text-*`、`wot-bg-*`、`wot-m-*`、`wot-p-*`、`wot-rounded-*` 等原子类规则 |
| `preflights` | 自动注入 `wot-ui` 的 CSS 变量，确保这些原子类能拿到正确的变量值 |

默认情况下，类名前缀是 `wot-`，例如：

- `wot-text-primary`
- `wot-bg-danger-surface`
- `wot-m-main`
- `wot-rounded-md`
- `wot-text-body-main`

## 怎么用

使用方式分三步：

| 步骤 | 说明 |
| --- | --- |
| 1. 安装依赖 | 安装 `unocss` 和 `@wot-ui/unocss-preset` |
| 2. 注册 preset | 在 `unocss.config.ts` 中引入并启用 `presetWot()` |
| 3. 在模板中使用类名 | 直接写 `wot-` 前缀原子类，不再手动维护大量样式映射 |

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

| 配置项 | 默认值 | 说明 | 示例 |
| --- | --- | --- | --- |
| `prefix` | `wot` | 工具类前缀 | `wot-text-primary`、`wot-m-main` |
| `preflight` | `true` | 是否自动注入 wot-ui CSS 变量 | `presetWot({ preflight: true })` |
| `baseTokens` | `false` | 是否开放基础色板和原始 token 类名 | `presetWot({ baseTokens: true })` |

## 提供的规则

| 规则类型 | 前缀模式 | 示例 |
| --- | --- | --- |
| 颜色 | `wot-text-*` / `wot-bg-*` / `wot-border-*` | `wot-text-primary`、`wot-bg-danger-surface`、`wot-border-border-main` |
| 间距 | `wot-m-*` / `wot-gap-*` | `wot-m-main`、`wot-gap-tight`、`wot-gap-x-loose` |
| 内边距 | `wot-p-*` | `wot-p-main`、`wot-px-tight`、`wot-pb-loose` |
| 圆角 | `wot-rounded-*` | `wot-rounded-md`、`wot-rounded-full` |
| 字重 | `wot-font-*` | `wot-font-medium`、`wot-font-semibold` |
| 排版 | `wot-text-*` | `wot-text-body-main`、`wot-text-title-large` |
| 透明度 | `wot-opacity-*` | `wot-opacity-disabled` |
| 描边 | `wot-border-stroke-*` | `wot-border-stroke-main` |

## 可用变量值

以下为各类原子类支持的主要变量值，使用时将它们拼接到对应规则后即可。

### 颜色类

| 项目 | 内容 |
| --- | --- |
| 适用前缀 | `wot-text-*`、`wot-bg-*`、`wot-border-*` |
| 主色 | `primary`、`primary-1` ~ `primary-10` |
| 危险色 | `danger`、`danger-main`、`danger-hover`、`danger-clicked`、`danger-disabled`、`danger-particular`、`danger-surface` |
| 成功色 | `success`、`success-main`、`success-hover`、`success-clicked`、`success-disabled`、`success-particular`、`success-surface` |
| 警告色 | `warning`、`warning-main`、`warning-hover`、`warning-clicked`、`warning-disabled`、`warning-particular`、`warning-surface` |
| 文字色 | `text-main`、`text-secondary`、`text-auxiliary`、`text-disabled`、`text-placeholder`、`text-white` |
| 图标色 | `icon-main`、`icon-secondary`、`icon-auxiliary`、`icon-disabled`、`icon-placeholder`、`icon-white` |
| 边框色 | `border-extra-strong`、`border-strong`、`border-main`、`border-light`、`border-white`、`border-zero` |
| 填充色 | `filled-extra-strong`、`filled-strong`、`filled-content`、`filled-bottom`、`filled-oppo`、`filled-zero` |
| 分割线 | `divider-main`、`divider-light`、`divider-strong`、`divider-white` |
| 反馈色 | `feedback-hover`、`feedback-active`、`feedback-accent` |
| 半透明填充 | `opacfilled-tooltip-toast-cover`、`opacfilled-main-cover`、`opacfilled-light-cover` |
| Picker View Mask | `picker-view-mask-start`、`picker-view-mask-end` |
| 分类色 | `classify-yellow-bg`、`classify-yellow-border`、`classify-yellow-content`、`classify-cyan-bg`、`classify-cyan-border`、`classify-cyan-content`、`classify-purple-bg`、`classify-purple-border`、`classify-purple-content`、`classify-grape-bg`、`classify-grape-border`、`classify-grape-content`、`classify-pink-bg`、`classify-pink-border`、`classify-pink-content` |
| 示例 | `wot-text-primary`、`wot-bg-filled-oppo`、`wot-border-border-main`、`wot-bg-classify-purple-content` |

### 间距类

| 项目 | 内容 |
| --- | --- |
| 适用前缀 | `wot-m-*`、`wot-mx-*`、`wot-my-*`、`wot-mt-*`、`wot-mr-*`、`wot-mb-*`、`wot-ml-*`、`wot-gap-*`、`wot-gap-x-*`、`wot-gap-y-*` |
| 可用值 | `zero`、`ultra-tight`、`super-tight`、`extra-tight`、`tight`、`main`、`loose`、`extra-loose`、`super-loose`、`ultra-loose`、`spacious`、`extra-spacious`、`super-spacious`、`ultra-spacious` |
| 示例 | `wot-m-main`、`wot-mt-tight`、`wot-gap-x-loose` |

### 内边距类

| 项目 | 内容 |
| --- | --- |
| 适用前缀 | `wot-p-*`、`wot-px-*`、`wot-py-*`、`wot-pt-*`、`wot-pr-*`、`wot-pb-*`、`wot-pl-*` |
| 可用值 | `zero`、`ultra-tight`、`super-tight`、`extra-tight`、`tight`、`main`、`loose`、`extra-loose`、`super-loose`、`ultra-loose`、`spacious`、`extra-spacious`、`super-spacious`、`ultra-spacious` |
| 示例 | `wot-p-main`、`wot-px-tight`、`wot-pb-loose` |

### 圆角类

| 项目 | 内容 |
| --- | --- |
| 适用前缀 | `wot-rounded-*` |
| 可用值 | `zero`、`sm`、`md`、`lg`、`xl`、`2xl`、`3xl`、`full` |
| 示例 | `wot-rounded-md`、`wot-rounded-full` |

### 字重类

| 项目 | 内容 |
| --- | --- |
| 适用前缀 | `wot-font-*` |
| 可用值 | `ultra-light`、`thin`、`light`、`regular`、`medium`、`semibold`、`bold` |
| 示例 | `wot-font-medium`、`wot-font-semibold` |

### 排版类

| 项目 | 内容 |
| --- | --- |
| 适用前缀 | `wot-text-*` |
| Title | `title-main`、`title-large`、`title-extra-large` |
| Body | `body-main`、`body-large`、`body-extra-large`、`body-super-large`、`body-ultra-large` |
| Label | `label-super-small`、`label-extra-small`、`label-small`、`label-main`、`label-large` |
| 示例 | `wot-text-body-main`、`wot-text-title-large`、`wot-text-label-large` |

### 透明度类

| 项目 | 内容 |
| --- | --- |
| 适用前缀 | `wot-opacity-*` |
| 可用值 | `disabled`、`dimmer`、`overlay`、`main`、`backdrop` |
| 示例 | `wot-opacity-disabled`、`wot-opacity-main` |

### 描边类

| 项目 | 内容 |
| --- | --- |
| 适用前缀 | `wot-border-stroke-*` |
| 可用值 | `zero`、`light`、`main`、`bold` |
| 示例 | `wot-border-stroke-main`、`wot-border-stroke-bold` |

### baseTokens 开启后可用

当 `baseTokens: true` 时，会额外开放基础色板与原始 token。

| 项目 | 内容 |
| --- | --- |
| 基础色 | `base-black`、`base-white`、`base-transparent` |
| 色阶家族 | `blue-*`、`lightblue-*`、`pink-*`、`red-*`、`volcano-*`、`orange-*`、`yellow-*`、`green-*`、`cyan-*`、`purple-*`、`grape-*`、`coolgrey-*`、`neutralgrey-*`、`warmgrey-*` |
| 色阶范围 | 每个家族支持 `1` ~ `10` |
| 额外透明色 | 非 grey 家族额外支持 `*-opac` |
| 透明阶 | `opac-1_02`、`opac-2_04`、`opac-3_08`、`opac-4_15`、`opac-5_20`、`opac-6_30`、`opac-7_45`、`opac-7_55`、`opac-8_65`、`opac-9_75`、`opac-10_85` |
| 白色透明阶 | `opacwhite-1_02`、`opacwhite-2_04`、`opacwhite-3_08`、`opacwhite-4_15`、`opacwhite-5_20`、`opacwhite-6_30`、`opacwhite-7_45`、`opacwhite-7_55`、`opacwhite-8_65`、`opacwhite-9_75`、`opacwhite-10_85` |
| 示例 | `wot-bg-base-black`、`wot-text-blue-6`、`wot-border-opac-3_08` |

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
