import styled from '@emotion/styled'
import { Flex } from 'theme-ui'
import Image from 'next/image'
import { H1 } from '../components/typography'
import { boxShadow, breakpoints, mediaQueries } from '../components/theme'

export const TextContent = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 0px 8px;
  max-width: 416px;
  ${mediaQueries[2]} {
    align-items: flex-start;
    margin-top: 64px;
  }
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  max-width: ${breakpoints[2]}px;
  margin: 0 auto;
  ${mediaQueries[2]} {
    flex-direction: row;
  }
`

export const RoundedImage = styled(Image)`
  border-radius: 50%;
  max-width: ${breakpoints[0]}px;
  max-height: ${breakpoints[0]}px;
  box-shadow: ${boxShadow};
`

export const CopyRight = styled(Flex)`
  flex-direction: column;
  align-items: center;
`

export const Title = styled(H1)`
  margin-bottom: 0px;
`
