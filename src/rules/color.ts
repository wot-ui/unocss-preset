import type { Rule } from '@unocss/core'
import { BASE_COLOR_MAP, SEMANTIC_COLOR_MAP } from '../maps'

const COLOR_UTILITY_MAP: Record<string, string> = {
  text: 'color',
  bg: 'background-color',
  border: 'border-color',
}

export function createColorRules(prefix: string, baseTokens: boolean): Rule[] {
  const p = prefix ? `${prefix}-` : ''
  const colorMap = baseTokens ? { ...SEMANTIC_COLOR_MAP, ...BASE_COLOR_MAP } : SEMANTIC_COLOR_MAP

  // Build a regex alternation from all keys for efficient matching
  const keys = Object.keys(colorMap)
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')
  const utilityPrefixes = Object.keys(COLOR_UTILITY_MAP).join('|')

  return [
    [
      new RegExp(`^${p}(${utilityPrefixes})-(${keys})$`),
      (match) => {
        const utility = match[1] as keyof typeof COLOR_UTILITY_MAP
        const token = match[2]
        const cssProperty = COLOR_UTILITY_MAP[utility]
        const value = colorMap[token]
        if (!cssProperty || !value)
          return
        return { [cssProperty]: value }
      },
    ],
  ]
}
