/**
 * Universal Portfolio Theme Synchronization Engine
 * Maps terminal themes to the entire portfolio UI:
 * - Injects Tailwind red scale variables (--color-red-50 to --color-red-950) so all text-red-*, bg-red-*, border-red-* update dynamically across the entire website
 * - Injects CSS variables for glows, backdrops, cursors, scrollbars, and panels
 * - Dispatches 'portfolio-theme-change' custom event for React components needing color props
 * - Persists active theme uniformly across all storage keys
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
  cyber: {
    accent: '#f0ff00',
    accentRgb: '240, 255, 0',
    glowRgb: '236, 72, 153',
    lightRgb: '245, 255, 128',
    bgSolid: '#080312',
    cardBg: '#150826',
    nodeBg: '#0d041a',
    shades: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fae8ff',
      400: '#f5d0fe',
      500: '#f0ff00',
      600: '#f43f5e',
      700: '#e11d48',
      800: '#be123c',
      900: '#881337',
      950: '#4c0519',
    },
    menuColors: ['#0d041a', '#1e0836', '#f0ff00'],
  },
  matrix: {
    accent: '#00ff66',
    accentRgb: '0, 255, 102',
    glowRgb: '0, 255, 102',
    lightRgb: '102, 255, 163',
    bgSolid: '#020f06',
    cardBg: '#041c0c',
    nodeBg: '#021408',
    shades: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#00ff66',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#021408',
    },
    menuColors: ['#021408', '#052912', '#00ff66'],
  },
  dracula: {
    accent: '#ff79c6',
    accentRgb: '255, 121, 198',
    glowRgb: '189, 147, 249',
    lightRgb: '255, 184, 226',
    bgSolid: '#282a36',
    cardBg: '#343746',
    nodeBg: '#21222c',
    shades: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#ff79c6',
      600: '#bd93f9',
      700: '#9333ea',
      800: '#6b21a8',
      900: '#44475a',
      950: '#282a36',
    },
    menuColors: ['#21222c', '#44475a', '#ff79c6'],
  },
  github: {
    accent: '#58a6ff',
    accentRgb: '88, 166, 255',
    glowRgb: '56, 139, 253',
    lightRgb: '121, 192, 255',
    bgSolid: '#0d1117',
    cardBg: '#161b22',
    nodeBg: '#090d12',
    shades: {
      50: '#f0f6fc',
      100: '#c9d1d9',
      200: '#b1bac4',
      300: '#8b949e',
      400: '#79c0ff',
      500: '#58a6ff',
      600: '#388bfd',
      700: '#1f6feb',
      800: '#1158c7',
      900: '#0d419d',
      950: '#041f5e',
    },
    menuColors: ['#090d12', '#161b22', '#58a6ff'],
  },
  vscode: {
    accent: '#007acc',
    accentRgb: '0, 122, 204',
    glowRgb: '0, 152, 255',
    lightRgb: '79, 193, 255',
    bgSolid: '#1e1e1e',
    cardBg: '#252526',
    nodeBg: '#181818',
    shades: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#007acc',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#252526',
      950: '#181818',
    },
    menuColors: ['#181818', '#252526', '#007acc'],
  },
  nord: {
    accent: '#88c0d0',
    accentRgb: '136, 192, 208',
    glowRgb: '129, 161, 193',
    lightRgb: '143, 188, 187',
    bgSolid: '#2e3440',
    cardBg: '#3b4252',
    nodeBg: '#242933',
    shades: {
      50: '#eceff4',
      100: '#e5e9f0',
      200: '#d8dee9',
      300: '#8fbcbb',
      400: '#88c0d0',
      500: '#81a1c1',
      600: '#5e81ac',
      700: '#4c566a',
      800: '#434c5e',
      900: '#3b4252',
      950: '#242933',
    },
    menuColors: ['#242933', '#3b4252', '#88c0d0'],
  },
  synthwave: {
    accent: '#ff7edb',
    accentRgb: '255, 126, 219',
    glowRgb: '54, 249, 246',
    lightRgb: '254, 68, 80',
    bgSolid: '#1a162f',
    cardBg: '#241e42',
    nodeBg: '#141026',
    shades: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f472b6',
      400: '#36f9f6',
      500: '#ff7edb',
      600: '#db2777',
      700: '#be185d',
      800: '#72f1b8',
      900: '#241e42',
      950: '#141026',
    },
    menuColors: ['#141026', '#241e42', '#ff7edb'],
  },
  tokyo: {
    accent: '#7aa2f7',
    accentRgb: '122, 162, 247',
    glowRgb: '187, 154, 247',
    lightRgb: '125, 207, 255',
    bgSolid: '#1a1b26',
    cardBg: '#24283b',
    nodeBg: '#16161e',
    shades: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#7dcfff',
      500: '#7aa2f7',
      600: '#bb9af7',
      700: '#7dcfff',
      800: '#414868',
      900: '#24283b',
      950: '#16161e',
    },
    menuColors: ['#16161e', '#24283b', '#7aa2f7'],
  },
}

export const THEME_NAMES = Object.keys(THEME_PALETTES)

export function getStoredTheme(): string {
  try {
    return (
      localStorage.getItem('roshzen_portfolio_theme') ||
      localStorage.getItem('portfolio-theme') ||
      localStorage.getItem('roshzen_term_theme') ||
      'default'
    )
  } catch {
    return 'default'
  }
}

export function setStoredTheme(themeName: string): void {
  try {
    localStorage.setItem('roshzen_portfolio_theme', themeName)
    localStorage.setItem('portfolio-theme', themeName)
    localStorage.setItem('roshzen_term_theme', themeName)
  } catch {
    // Ignore in private browsing
  }
}

export function applyPortfolioTheme(themeName: string = 'default'): void {
  const normalized = (themeName || 'default').toLowerCase().trim()
  const palette = THEME_PALETTES[normalized] || THEME_PALETTES.default
  const activeName = THEME_PALETTES[normalized] ? normalized : 'default'
  const root = document.documentElement

  // Persist across all unified keys
  setStoredTheme(activeName)

  // Set top-level dataset
  root.dataset.portfolioTheme = activeName
  const isRedTheme = activeName === 'default' || activeName === 'red'

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
        detail: { theme: activeName, palette },
      })
    )
  } catch {
    // Ignore in non-browser environments
  }
}
