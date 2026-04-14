export interface TypographyToken {
  fontSize: string
  lineHeight: string
}

export const TYPOGRAPHY_MAP: Record<string, TypographyToken> = {
  // title
  'title-main': {
    fontSize: 'var(--wot-typography-title-size-main)',
    lineHeight: 'var(--wot-typography-title-line-height-size-main)',
  },
  'title-large': {
    fontSize: 'var(--wot-typography-title-size-large)',
    lineHeight: 'var(--wot-typography-title-line-height-size-large)',
  },
  'title-extra-large': {
    fontSize: 'var(--wot-typography-title-size-extra-large)',
    lineHeight: 'var(--wot-typography-title-line-height-size-extra-large)',
  },
  // body
  'body-main': {
    fontSize: 'var(--wot-typography-body-size-main)',
    lineHeight: 'var(--wot-typography-body-line-height-size-main)',
  },
  'body-large': {
    fontSize: 'var(--wot-typography-body-size-large)',
    lineHeight: 'var(--wot-typography-body-line-height-size-large)',
  },
  'body-extra-large': {
    fontSize: 'var(--wot-typography-body-size-extra-large)',
    lineHeight: 'var(--wot-typography-body-line-height-size-extra-large)',
  },
  'body-super-large': {
    fontSize: 'var(--wot-typography-body-size-super-large)',
    lineHeight: 'var(--wot-typography-body-line-height-size-super-large)',
  },
  'body-ultra-large': {
    fontSize: 'var(--wot-typography-body-size-ultra-large)',
    lineHeight: 'var(--wot-typography-body-line-height-size-ultra-large)',
  },
  // label
  'label-super-small': {
    fontSize: 'var(--wot-typography-label-size-super-small)',
    lineHeight: 'var(--wot-typography-label-line-height-size-super-small)',
  },
  'label-extra-small': {
    fontSize: 'var(--wot-typography-label-size-extra-small)',
    lineHeight: 'var(--wot-typography-label-line-height-size-extra-small)',
  },
  'label-small': {
    fontSize: 'var(--wot-typography-label-size-small)',
    lineHeight: 'var(--wot-typography-label-line-height-size-small)',
  },
  'label-main': {
    fontSize: 'var(--wot-typography-label-size-main)',
    lineHeight: 'var(--wot-typography-label-line-height-size-main)',
  },
  'label-large': {
    fontSize: 'var(--wot-typography-label-size-large)',
    lineHeight: 'var(--wot-typography-label-line-height-size-large)',
  },
}
