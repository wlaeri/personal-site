import styled from '@emotion/styled'
import { Button as ThemeButton } from 'theme-ui'
import { boxShadow, theme } from './theme'

export const Button = styled(ThemeButton)`
  color: ${theme.colors.background};
  font-family: ${theme.fonts.heading};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${boxShadow};
  :hover {
    background: ${theme.colors.text};
    transform: scale(1.1);
  }
`
