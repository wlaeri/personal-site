import styled from '@emotion/styled'
import { Button as ThemeButton } from 'theme-ui'
import { theme } from '../theme'

export const Button = styled(ThemeButton)`
  color: ${theme.colors.background};
  font-family: ${theme.fonts.heading};
  cursor: pointer;
  :hover {
    background: ${theme.colors.text};
  }
`
