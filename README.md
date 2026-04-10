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
  prefix: 'w',
  preflight: true,
  baseTokens: false,
})
```

- `prefix`: 工具类前缀，默认是 `w`，例如 `w-text-primary`、`w-m-main`
- `preflight`: 是否自动注入 wot-ui CSS 变量，默认开启
- `baseTokens`: 是否开放基础色板和原始 token 类名，默认关闭

## 提供的规则

- 颜色：`w-text-primary`、`w-bg-danger-surface`、`w-border-border-main`
- 间距：`w-m-main`、`w-gap-tight`、`w-gap-x-loose`
- 内边距：`w-p-main`、`w-px-tight`、`w-pb-loose`
- 圆角：`w-rounded-md`、`w-rounded-full`
- 字重：`w-font-medium`、`w-font-semibold`
- 排版：`w-text-body-main`、`w-text-title-large`
- 透明度：`w-opacity-disabled`
- 描边：`w-border-stroke-main`

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

本仓库继续使用当前项目的 `tsdown` 打包和 `vitest` 测试技术栈，没有引入参考仓库的构建配置。

## License

[MIT](./LICENSE.md)
