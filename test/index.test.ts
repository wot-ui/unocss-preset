import { describe, expect, it } from 'vitest'
import {
  BASE_COLOR_MAP,
  presetWot,
  SEMANTIC_COLOR_MAP,
  SPACING_MAP,
} from '../src'

describe('presetWot', () => {
  it('returns the default preset shape', () => {
    const preset = presetWot()
    const theme = preset.theme as { colors?: Record<string, string> }

    expect(preset.name).toBe('@wot-ui/unocss-preset')
    expect(preset.rules).toHaveLength(8)
    expect(preset.preflights).toHaveLength(3)
    expect(theme.colors?.['w-primary']).toBe('var(--wot-primary-6)')
    expect(theme.colors?.['w-base-black']).toBeUndefined()
  })

  it('supports disabling preflights and base tokens', () => {
    const preset = presetWot({ preflight: false, baseTokens: true })
    const theme = preset.theme as { colors?: Record<string, string> }

    expect(preset.preflights).toEqual([])
    expect(theme.colors?.['w-base-black']).toBe('var(--wot-base-black)')
  })

  it('supports removing the utility prefix', () => {
    const preset = presetWot({ prefix: '' })
    const theme = preset.theme as { colors?: Record<string, string> }

    expect(theme.colors?.primary).toBe('var(--wot-primary-6)')
    expect(theme.colors?.['w-primary']).toBeUndefined()
  })
})

describe('supporting exports', () => {
  it('exposes token maps', () => {
    expect(SEMANTIC_COLOR_MAP.primary).toBe('var(--wot-primary-6)')
    expect(BASE_COLOR_MAP['base-black']).toBe('var(--wot-base-black)')
    expect(SPACING_MAP.main).toBe('var(--wot-spacing-main)')
  })

  it('creates the three CSS variable preflights', async () => {
    const preflights = presetWot().preflights ?? []
    const cssList = await Promise.all(preflights.map(preflight => preflight.getCSS({} as never)))

    expect(preflights).toHaveLength(3)
    expect(cssList).toSatisfy((values: Array<string | undefined>) => {
      return values.every(value => typeof value === 'string' && value.includes('--wot-'))
    })
  })
})
