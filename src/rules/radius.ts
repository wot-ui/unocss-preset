import type { Rule } from '@unocss/core'
import { RADIUS_MAP } from '../maps'

export function createRadiusRules(prefix: string): Rule[] {
  const p = prefix ? `${prefix}-` : ''
  const keys = Object.keys(RADIUS_MAP)
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')

  return [
    [
      new RegExp(`^${p}rounded-(${keys})$`),
      (match) => {
        const token = match[1]
        const value = RADIUS_MAP[token]
        if (!value)
          return
        return { 'border-radius': value }
      },
    ],
  ]
}
