/**
 * Portfolio Theme Synchronization Engine
 * Maps terminal themes to the entire portfolio UI:
 * - Injects Tailwind red scale variables (--color-red-50 to --color-red-950) so all text-red-*, bg-red-*, border-red-* update dynamically
 * - Injects CSS variables for glows, backdrops, cursors, scrollbars, and panels
 * - Dispatches 'portfolio-theme-change' custom event for React components needing color props
 */

export interface ThemePalette {
  accent: string
  accentRgb: string
  glowRgb: string
  lightRgb: string
  bgSolid: string
  cardBg: string
  nodeBg: string
  shades: Record<number, string>
  menuColors: string[]
}

export const THEME_PALETTES: Record<string, ThemePalette> = {
  default: {
    accent: '#ef4444',
    accentRgb: '239, 68, 68',
    glowRgb: '220, 38, 38',
    lightRgb: '248, 113, 113',
    bgSolid: '#07080c',
    cardBg: '#140606',
    nodeBg: '#0b0505',
    shades: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    menuColors: ['#1c0404', '#450a0a', '#991b1b'],
  },
  red: {
    accent: '#ef4444',
    accentRgb: '239, 68, 68',
    glowRgb: '220, 38, 38',
    lightRgb: '248, 113, 113',
    bgSolid: '#07080c',
    cardBg: '#140606',
    nodeBg: '#0b0505',
    shades: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    menuColors: ['#1c0404', '#450a0a', '#991b1b'],
  },
  green: {
    accent: '#22c55e',
    accentRgb: '34, 197, 94',
    glowRgb: '22, 163, 74',
    lightRgb: '74, 222, 128',
    bgSolid: '#030c08',
    cardBg: '#04180d',
    nodeBg: '#021208',
    shades: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },
    menuColors: ['#02180c', '#06381e', '#166534'],
  },
  blue: {
    accent: '#38bdf8',
    accentRgb: '56, 189, 248',
    glowRgb: '14, 165, 233',
    lightRgb: '125, 211, 252',
    bgSolid: '#040a14',
    cardBg: '#051829',
    nodeBg: '#030f1c',
    shades: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
    },
    menuColors: ['#021224', '#06294d', '#075985'],
  },
  amber: {
    accent: '#f59e0b',
    accentRgb: '245, 158, 11',
    glowRgb: '217, 119, 6',
    lightRgb: '251, 191, 36',
    bgSolid: '#0f0a02',
    cardBg: '#1f1505',
    nodeBg: '#140d02',
    shades: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
    menuColors: ['#1f1505', '#451a03', '#92400e'],
  },
  purple: {
    accent: '#a855f7',
    accentRgb: '168, 85, 247',
    glowRgb: '147, 51, 234',
    lightRgb: '192, 132, 252',
    bgSolid: '#0d0414',
    cardBg: '#1b0829',
    nodeBg: '#12041c',
    shades: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764',
    },
    menuColors: ['#12041c', '#3b0764', '#7e22ce'],
  },
  cyan: {
    accent: '#06b6d4',
    accentRgb: '6, 182, 212',
    glowRgb: '8, 145, 178',
    lightRgb: '34, 211, 238',
    bgSolid: '#020d12',
    cardBg: '#041c26',
    nodeBg: '#02131a',
    shades: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#083344',
    },
    menuColors: ['#02131a', '#083344', '#0e7490'],
  },
}

export function getStoredTheme(): string {
  try {
    return localStorage.getItem('portfolio-theme') || 'default'
  } catch {
    return 'default'
  }
}

export function setStoredTheme(themeName: string): void {
  try {
    localStorage.setItem('portfolio-theme', themeName)
  } catch {
    // Ignore in private browsing
  }
}

export function applyPortfolioTheme(themeName: string = 'default'): void {
  const palette = THEME_PALETTES[themeName] || THEME_PALETTES.default
  const root = document.documentElement

  // Set top-level dataset
  root.dataset.portfolioTheme = themeName
  const isRedTheme = themeName === 'default' || themeName === 'red'

  // Set primary portfolio CSS variables
  root.style.setProperty('--portfolio-accent', palette.accent)
  root.style.setProperty('--portfolio-accent-rgb', palette.accentRgb)
  root.style.setProperty('--portfolio-accent-glow-rgb', palette.glowRgb)
  root.style.setProperty('--portfolio-accent-light-rgb', palette.lightRgb)
  root.style.setProperty('--portfolio-accent-soft', `rgba(${palette.accentRgb}, 0.18)`)
  root.style.setProperty('--portfolio-accent-glow', `rgba(${palette.accentRgb}, 0.35)`)
  root.style.setProperty('--portfolio-bg-solid', palette.bgSolid)
  root.style.setProperty('--portfolio-card-bg', palette.cardBg || '#140606')
  root.style.setProperty('--portfolio-node-bg', palette.nodeBg || '#0b0505')

  if (isRedTheme) {
    const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    steps.forEach((step) => {
      root.style.removeProperty(`--color-red-${step}`)
    })
  } else {
    Object.entries(palette.shades).forEach(([step, color]) => {
      root.style.setProperty(`--color-red-${step}`, color)
    })
  }

  try {
    window.dispatchEvent(
      new CustomEvent('portfolio-theme-change', {
        detail: { theme: themeName, palette },
      })
    )
  } catch {
    // Ignore in non-browser environments
  }
}
