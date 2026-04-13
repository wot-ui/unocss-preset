import type { Rule } from '@unocss/core'
import { TYPOGRAPHY_MAP } from '../maps'

export function createTypographyRules(prefix: string): Rule[] {
  const p = prefix ? `${prefix}-` : ''
  const keys = Object.keys(TYPOGRAPHY_MAP)
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')
  const autocompleteKeys = Object.keys(TYPOGRAPHY_MAP).join('|')

  return [
    [
      new RegExp(`^${p}text-(${keys})$`),
      (match) => {
        const token = match[1]
        const typography = TYPOGRAPHY_MAP[token]
        if (!typography)
          return
        return {
          'font-size': typography.fontSize,
          'line-height': typography.lineHeight,
        }
      },
      { autocomplete: `${p}text-(${autocompleteKeys})` },
    ],
  ]
}
