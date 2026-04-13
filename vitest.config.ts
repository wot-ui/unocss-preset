/*
 * @Author: weisheng
 * @Date: 2026-04-10 15:56:15
 * @LastEditTime: 2026-04-13 18:38:44
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: /unocss-preset/vitest.config.ts
 * 记得注释
 */
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    server: {
      deps: {
        inline: ['vitest-package-exports'],
      },
    },
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      reporter: ['text', 'lcov', 'json'],
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
    },
  },
})
