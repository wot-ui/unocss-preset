import type { Rule } from '@unocss/core'
import { FONT_WEIGHT_MAP } from '../maps'

export function createFontWeightRules(prefix: string): Rule[] {
  const p = prefix ? `${prefix}-` : ''
  const keys = Object.keys(FONT_WEIGHT_MAP)
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')

  return [
    [
      new RegExp(`^${p}font-(${keys})$`),
      (match) => {
        const token = match[1]
        const value = FONT_WEIGHT_MAP[token]
        if (!value)
          return
        return { 'font-weight': value }
      },
    ],
  ]
}
