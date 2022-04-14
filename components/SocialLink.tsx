import styled from '@emotion/styled'
import Image from 'next/image'
import { Flex, Heading } from 'theme-ui'
import { theme } from './theme'
import { Grow } from './animations/Grow'

const SocialLinkText = styled(Flex)`
  flex-direction: column;
  width: 124px;
  margin-left: 16px;
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
        <Heading as="h4">{title}</Heading>
        <Heading as="h5">{subtitle}</Heading>
      </SocialLinkText>
    </SocialLinkContainer>
  </Grow>
)
