/**
 * A collection of primitive design tokens compliant with the Theme UI spec.
 * See the Theme UI [Theme Specification](https://theme-ui.com/theme-spec) for more details.
 */
export interface Theme {
  fonts: {
    body: string
    heading: string
    monospace: string
  }
  lineHeights: {
    body: number
    heading: number
  }
  letterSpacings: {
    body: string
    caps: string
  }
  fontSizes: number[]
  fontWeights: {
    body: number
    heading: number
    display: number
  }
  colors: {
    background: string
    text: string
    primary: string
    secondary: string
    accent: string
    highlight: string
    muted: string
  }
}
