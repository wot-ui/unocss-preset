import { describe, expect, it } from 'vitest'
import * as maps from '../src/maps'
import { createRules } from '../src/rules'
import { createTheme } from '../src/theme'

type RuleMatcher = (match: RegExpMatchArray) => Record<string, string> | undefined

function getRule(prefix: string, baseTokens: boolean, utility: string): [RegExp, RuleMatcher, RegExpMatchArray] {
  const rules = createRules(prefix, baseTokens)
  for (const rule of rules) {
    const [regex, handler] = rule as unknown as [RegExp, RuleMatcher]
    const match = utility.match(regex)
    if (match)
      return [regex, handler, match]
  }
  throw new Error(`rule not found for ${utility}`)
}

describe('rules mapping', () => {
  it('supports color utilities with default wot prefix', () => {
    const [, handler, match] = getRule('wot', false, 'wot-text-primary')
    expect(handler(match)).toEqual({ color: 'var(--wot-primary-6)' })
  })

  it('supports spacing and padding utilities', () => {
    const [, spacingHandler, spacingMatch] = getRule('wot', false, 'wot-mx-main')
    expect(spacingHandler(spacingMatch)).toEqual({
      'margin-left': 'var(--wot-spacing-main)',
      'margin-right': 'var(--wot-spacing-main)',
    })

    const [, paddingHandler, paddingMatch] = getRule('wot', false, 'wot-px-main')
    expect(paddingHandler(paddingMatch)).toEqual({
      'padding-left': 'var(--wot-padding-main)',
      'padding-right': 'var(--wot-padding-main)',
    })
  })

  it('supports radius, font weight, typography, opacity and stroke utilities', () => {
    expect(getRule('wot', false, 'wot-rounded-md')[1](getRule('wot', false, 'wot-rounded-md')[2]))
      .toEqual({ 'border-radius': 'var(--wot-radius-main)' })
    expect(getRule('wot', false, 'wot-font-medium')[1](getRule('wot', false, 'wot-font-medium')[2]))
      .toEqual({ 'font-weight': 'var(--wot-font-weight-medium)' })
    expect(getRule('wot', false, 'wot-text-body-main')[1](getRule('wot', false, 'wot-text-body-main')[2]))
      .toEqual({
        'font-size': 'var(--wot-typography-body-size-main)',
        'line-height': 'var(--wot-typography-body-line--height-size-main)',
      })
    expect(getRule('wot', false, 'wot-opacity-main')[1](getRule('wot', false, 'wot-opacity-main')[2]))
      .toEqual({ opacity: 'var(--wot-opacity-main)' })
    expect(getRule('wot', false, 'wot-border-stroke-main')[1](getRule('wot', false, 'wot-border-stroke-main')[2]))
      .toEqual({ 'border-width': 'var(--wot-stroke-main)' })
  })

  it('supports no-prefix mode', () => {
    const [, handler, match] = getRule('', false, 'text-primary')
    expect(handler(match)).toEqual({ color: 'var(--wot-primary-6)' })
  })

  it('covers guard branches for invalid tokens', () => {
    const [, colorHandler] = getRule('wot', false, 'wot-text-primary')
    expect(colorHandler(['', 'invalid', 'primary'] as unknown as RegExpMatchArray)).toBeUndefined()
    expect(colorHandler(['', 'text', 'missing'] as unknown as RegExpMatchArray)).toBeUndefined()

    const [, spacingHandler] = getRule('wot', false, 'wot-m-main')
    expect(spacingHandler(['', 'invalid', 'main'] as unknown as RegExpMatchArray)).toBeUndefined()
    expect(spacingHandler(['', 'm', 'missing'] as unknown as RegExpMatchArray)).toBeUndefined()

    const [, paddingHandler] = getRule('wot', false, 'wot-p-main')
    expect(paddingHandler(['', 'invalid', 'main'] as unknown as RegExpMatchArray)).toBeUndefined()
    expect(paddingHandler(['', 'p', 'missing'] as unknown as RegExpMatchArray)).toBeUndefined()

    const [, radiusHandler] = getRule('wot', false, 'wot-rounded-md')
    expect(radiusHandler(['', 'missing'] as unknown as RegExpMatchArray)).toBeUndefined()

    const [, fontWeightHandler] = getRule('wot', false, 'wot-font-medium')
    expect(fontWeightHandler(['', 'missing'] as unknown as RegExpMatchArray)).toBeUndefined()

    const [, typographyHandler] = getRule('wot', false, 'wot-text-body-main')
    expect(typographyHandler(['', 'missing'] as unknown as RegExpMatchArray)).toBeUndefined()

    const [, opacityHandler] = getRule('wot', false, 'wot-opacity-main')
    expect(opacityHandler(['', 'missing'] as unknown as RegExpMatchArray)).toBeUndefined()

    const [, strokeHandler] = getRule('wot', false, 'wot-border-stroke-main')
    expect(strokeHandler(['', 'missing'] as unknown as RegExpMatchArray)).toBeUndefined()
  })
})

describe('theme and map exports', () => {
  it('includes base colors only when baseTokens is enabled', () => {
    const semanticOnly = createTheme('wot', false).colors
    const withBase = createTheme('wot', true).colors

    expect(semanticOnly['wot-base-black']).toBeUndefined()
    expect(withBase['wot-base-black']).toBe('var(--wot-base-black)')
  })

  it('covers maps re-export entry', () => {
    expect(maps.SEMANTIC_COLOR_MAP.primary).toBe('var(--wot-primary-6)')
    expect(maps.BASE_COLOR_MAP['base-black']).toBe('var(--wot-base-black)')
    expect(maps.SPACING_MAP.main).toBe('var(--wot-spacing-main)')
    expect(maps.PADDING_MAP.main).toBe('var(--wot-padding-main)')
    expect(maps.RADIUS_MAP.md).toBe('var(--wot-radius-main)')
    expect(maps.FONT_WEIGHT_MAP.medium).toBe('var(--wot-font-weight-medium)')
    expect(maps.OPACITY_MAP.main).toBe('var(--wot-opacity-main)')
    expect(maps.STROKE_MAP.main).toBe('var(--wot-stroke-main)')
    expect(maps.TYPOGRAPHY_MAP['body-main']?.fontSize).toBe('var(--wot-typography-body-size-main)')
  })
})
