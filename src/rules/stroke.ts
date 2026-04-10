import type { Rule } from '@unocss/core'
import { STROKE_MAP } from '../maps'

export function createStrokeRules(prefix: string): Rule[] {
  const p = prefix ? `${prefix}-` : ''
  const keys = Object.keys(STROKE_MAP)
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')

  return [
    [
      new RegExp(`^${p}border-stroke-(${keys})$`),
      (match) => {
        const token = match[1]
        const value = STROKE_MAP[token]
        if (!value)
          return
        return { 'border-width': value }
      },
    ],
  ]
}
