import { Theme } from './theme.interface'

export const breakpoints = [576, 768, 992, 1200]

export const mediaQueries = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
)

export const scale = []

export const boxShadow =
  '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

export const theme: Theme = {
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Montserrat", sans-serif',
    monospace: '"IBM Plex Mono", monospace',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 400,
    display: 600,
  },
  colors: {
    background: '#013C40',
    text: '#E1FAF9',
    primary: '#A1E5AB',
    secondary: '#6699CC',
    accent: '#F95738',
    highlight: '#025E64',
    muted: '#8FA3A3',
  },
}
