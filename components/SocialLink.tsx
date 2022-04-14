import styled from '@emotion/styled'
import Image from 'next/image'
import { Flex } from 'theme-ui'
import { theme } from './theme'
import { Grow } from './animations/Grow'
import { H3, H4 } from './typography'

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
      <Image src={src} alt={alt} width={48} height={48} />
      <SocialLinkText>
        <H3>{title}</H3>
        <H4>{subtitle}</H4>
      </SocialLinkText>
    </SocialLinkContainer>
  </Grow>
)
