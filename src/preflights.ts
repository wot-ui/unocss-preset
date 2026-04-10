import type { Preflight } from '@unocss/core'
import { BASE_CSS_VARS, DARK_CSS_VARS, LIGHT_CSS_VARS } from './generated/css-vars'

export function createPreflights(): Preflight[] {
  return [{ getCSS: () => BASE_CSS_VARS }, { getCSS: () => LIGHT_CSS_VARS }, { getCSS: () => DARK_CSS_VARS }]
}
