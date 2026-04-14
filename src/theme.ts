import type { Preset } from '@unocss/core'
import {
  BASE_COLOR_MAP,
  SEMANTIC_COLOR_MAP,
} from './maps'

export function createTheme(prefix: string, baseTokens: boolean): NonNullable<Preset['theme']> & { colors: Record<string, string> } {
  const p = prefix ? `${prefix}-` : ''
  const colorMap = baseTokens
    ? { ...SEMANTIC_COLOR_MAP, ...BASE_COLOR_MAP }
    : SEMANTIC_COLOR_MAP

  return {
    colors: Object.fromEntries(
      Object.entries(colorMap).map(([key, value]) => [`${p}${key}`, value]),
    ),
  }
}
