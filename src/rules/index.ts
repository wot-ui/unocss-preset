import type { Rule } from '@unocss/core'
import { createColorRules } from './color'
import { createFontWeightRules } from './font-weight'
import { createOpacityRules } from './opacity'
import { createPaddingRules } from './padding'
import { createRadiusRules } from './radius'
import { createSpacingRules } from './spacing'
import { createStrokeRules } from './stroke'
import { createTypographyRules } from './typography'

export function createRules(prefix: string, baseTokens: boolean): Rule[] {
  return [
    ...createColorRules(prefix, baseTokens),
    ...createSpacingRules(prefix),
    ...createPaddingRules(prefix),
    ...createRadiusRules(prefix),
    ...createFontWeightRules(prefix),
    ...createTypographyRules(prefix),
    ...createOpacityRules(prefix),
    ...createStrokeRules(prefix),
  ]
}
