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

export const H3 = styled.h3`
  ${baseHeading}
  font-weight: 400;
  font-size: ${theme.fontSizes[2]}px;
  margin: 0px;
`

export const H4 = styled.h4`
  ${baseHeading}
  font-weight: 400;
  font-size: ${theme.fontSizes[1]}px;
  margin: 0px;
`

export const H5 = styled.h5`
  ${baseHeading}
  font-weight: 400;
  font-size: ${theme.fontSizes[0]}px;
  margin: 0px;
`
