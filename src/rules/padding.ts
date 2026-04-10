import type { Rule } from '@unocss/core'
import { PADDING_MAP } from '../maps'

const PADDING_PROPERTY_MAP: Record<string, string[]> = {
  p: ['padding'],
  px: ['padding-left', 'padding-right'],
  py: ['padding-top', 'padding-bottom'],
  pt: ['padding-top'],
  pr: ['padding-right'],
  pb: ['padding-bottom'],
  pl: ['padding-left'],
}

export function createPaddingRules(prefix: string): Rule[] {
  const p = prefix ? `${prefix}-` : ''
  const keys = Object.keys(PADDING_MAP)
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')
  const utilities = Object.keys(PADDING_PROPERTY_MAP).join('|')

  return [
    [
      new RegExp(`^${p}(${utilities})-(${keys})$`),
      (match) => {
        const utility = match[1]
        const token = match[2]
        const properties = PADDING_PROPERTY_MAP[utility]
        const value = PADDING_MAP[token]
        if (!properties || !value)
          return
        const result: Record<string, string> = {}
        for (const prop of properties) {
          result[prop] = value
        }
        return result
      },
    ],
  ]
}
