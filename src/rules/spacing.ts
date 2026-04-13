import type { Rule } from '@unocss/core'
import { SPACING_MAP } from '../maps'

const MARGIN_PROPERTY_MAP: Record<string, string[]> = {
  'm': ['margin'],
  'mx': ['margin-left', 'margin-right'],
  'my': ['margin-top', 'margin-bottom'],
  'mt': ['margin-top'],
  'mr': ['margin-right'],
  'mb': ['margin-bottom'],
  'ml': ['margin-left'],
  'gap': ['gap'],
  'gap-x': ['column-gap'],
  'gap-y': ['row-gap'],
}

export function createSpacingRules(prefix: string): Rule[] {
  const p = prefix ? `${prefix}-` : ''
  const keys = Object.keys(SPACING_MAP)
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')
  const utilities = Object.keys(MARGIN_PROPERTY_MAP)
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')
  const autocompleteKeys = Object.keys(SPACING_MAP).join('|')
  const autocompleteUtilities = Object.keys(MARGIN_PROPERTY_MAP).join('|')

  return [
    [
      new RegExp(`^${p}(${utilities})-(${keys})$`),
      (match) => {
        const utility = match[1]
        const token = match[2]
        const properties = MARGIN_PROPERTY_MAP[utility]
        const value = SPACING_MAP[token]
        if (!properties || !value)
          return
        const result: Record<string, string> = {}
        for (const prop of properties) {
          result[prop] = value
        }
        return result
      },
      { autocomplete: `${p}(${autocompleteUtilities})-(${autocompleteKeys})` },
    ],
  ]
}
