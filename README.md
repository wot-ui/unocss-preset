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
