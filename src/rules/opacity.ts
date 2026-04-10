import type { Rule } from '@unocss/core'
import { OPACITY_MAP } from '../maps'

export function createOpacityRules(prefix: string): Rule[] {
  const p = prefix ? `${prefix}-` : ''
  const keys = Object.keys(OPACITY_MAP)
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')

  return [
    [
      new RegExp(`^${p}opacity-(${keys})$`),
      (match) => {
        const token = match[1]
        const value = OPACITY_MAP[token]
        if (!value)
          return
        return { opacity: value }
      },
    ],
  ]
}
