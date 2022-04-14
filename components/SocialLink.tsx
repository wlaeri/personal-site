import styled from '@emotion/styled'
import Image from 'next/image'
import { Flex } from 'theme-ui'
import { boxShadow, theme } from './theme'
import { Grow } from './animations/Grow'
import { H3, H4 } from './typography'
import { Box } from 'theme-ui'

const SocialLinkText = styled(Flex)`
  flex-direction: column;
  width: 124px;
  margin-left: 16px;
  justify-content: center;
`

const SocialLinkContainer = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: ${theme.colors.background};
`

const Icon = styled(Box)`
  box-shadow: ${boxShadow};
  height: 48px;
  border-radius: 8px;
`

export interface SocialLinkProps {
  title: string
  subtitle: string
  href: string
  /**
   * The path to the static image in the public directory.
   */
  src: string
  /**
   * Alternative text for the icon.
   */
  alt: string
}

export const SocialLink = ({
  title,
  subtitle,
  href,
  src,
  alt,
}: SocialLinkProps): JSX.Element => (
  <Grow>
    <SocialLinkContainer href={href} target="_blank">
      <Icon>
        <Image src={src} alt={alt} width={48} height={48} />
      </Icon>
      <SocialLinkText>
        <H3>{title}</H3>
        <H4>{subtitle}</H4>
      </SocialLinkText>
    </SocialLinkContainer>
  </Grow>
)
