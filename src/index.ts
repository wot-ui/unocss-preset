import type { Preset } from '@unocss/core'
import type { PresetWotOptions } from './types'
import { createPreflights } from './preflights'
import { createRules } from './rules'
import { createTheme } from './theme'

export function presetWot(options: PresetWotOptions = {}): Preset {
  const { prefix = 'wot', preflight = true, baseTokens = false } = options

  return {
    name: '@wot-ui/unocss-preset',
    rules: createRules(prefix, baseTokens),
    theme: createTheme(prefix, baseTokens),
    preflights: preflight ? createPreflights() : [],
  }
}

export type { PresetWotOptions }
export {
  BASE_COLOR_MAP,
  FONT_WEIGHT_MAP,
  OPACITY_MAP,
  PADDING_MAP,
  RADIUS_MAP,
  SEMANTIC_COLOR_MAP,
  SPACING_MAP,
  STROKE_MAP,
  TYPOGRAPHY_MAP,
} from './maps'
