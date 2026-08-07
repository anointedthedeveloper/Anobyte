// Brand colours — tuned to favicon.png logo (electric blue → deep violet)
export const C = {
  // blues — slightly warmer, closer to logo
  blue50:       '#EBF0FF',
  blue100:      '#D4DCFF',
  blue200:      '#A8B8FF',
  blue500:      '#4F72F8',   // primary blue (logo left leg)
  blue600:      '#3A5CE0',

  // violets — rich, from logo right leg
  violet500:    '#8B3FF5',
  violet600:    '#7530E0',
  violetLight:  '#F2EEFF',

  // ink
  ink:          '#0B0E2A',
  ink2:         '#1C2040',
  ink3:         '#3A4070',

  // text
  body:         '#52597A',
  muted:        '#96A0C0',
  subtle:       '#BCC4DC',

  // ui
  white:        '#FFFFFF',
  bg:           '#F5F7FC',
  border:       '#E5E8F2',

  // status
  green:        '#00C87A',
  amber:        '#F59E0B',
  rose:         '#EC4899',
}

export const G = {
  // exact logo gradient direction
  brand:  'linear-gradient(135deg, #4F72F8 0%, #8B3FF5 100%)',
  brandH: 'linear-gradient(135deg, #3A5CE0 0%, #7530E0 100%)',
  logoOrb:'linear-gradient(140deg, #4BBCFF 0%, #4F72F8 45%, #8B3FF5 100%)',
  dark:   'linear-gradient(160deg, #0B0E2A 0%, #141840 100%)',
}

export const S = {
  card:  '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)',
  cardH: '0 4px 24px rgba(79,114,248,0.16), 0 2px 8px rgba(0,0,0,0.06)',
  btn:   '0 4px 14px rgba(79,114,248,0.40)',
  btnH:  '0 6px 22px rgba(79,114,248,0.54)',
  nav:   '0 1px 0 rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.05)',
}

export const F = {
  head: '"Space Grotesk", sans-serif',
  body: '"Inter", sans-serif',
}

export const maxW  = '1320px'
export const gutter = 'clamp(16px, 3.5vw, 64px)'
