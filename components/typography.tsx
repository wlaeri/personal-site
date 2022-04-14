import styled from '@emotion/styled'
import { mediaQueries, theme } from './theme'

const baseHeading = `
  font-family: ${theme.fonts.heading};
`

export const H1 = styled.h1`
  ${baseHeading}
  font-size: ${theme.fontSizes[5]}px;
  ${mediaQueries[0]} {
    font-size: ${theme.fontSizes[6]}px;
  }
  ${mediaQueries[2]} {
    font-size: ${theme.fontSizes[7]}px;
  }
`

export const H2 = styled.h2`
  ${baseHeading}
  font-weight: 400;
  font-size: ${theme.fontSizes[4]}px;
  ${mediaQueries[0]} {
    font-size: ${theme.fontSizes[5]}px;
  }
  ${mediaQueries[2]} {
    font-size: ${theme.fontSizes[6]}px;
  }
`
