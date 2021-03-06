import type { NextPage } from 'next'
import Head from 'next/head'
import { Flex, Grid } from 'theme-ui'
import { SocialLink } from '../components/SocialLink'
import { EmojiList } from '../components/EmojiList'
import { Button } from '../components/Button'
import { H2, H5 } from '../components/typography'
import { yearsBetween } from '../components/utils/yearsBetween'
import {
  CopyRight,
  MainContainer,
  RoundedImage,
  TextContent,
  Title,
} from '../styles/home.styles'
import { boxShadow } from '../components/theme'

const Home: NextPage = () => {
  const now = new Date()
  const firstTimeShippingProductionCode = new Date(2014, 5, 1)
  const firstTimeBuildingTeam = new Date(2017, 8, 1)
  const timeShippingProuductionCode = Math.round(
    yearsBetween(firstTimeShippingProductionCode, now)
  )
  const timeLeadingTeams = Math.round(yearsBetween(firstTimeBuildingTeam, now))
  return (
    <div>
      <Head>
        <title>Will Laeri</title>
        <meta name="description" content="Engineering Leader" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* View source code button */}
      <a
        href="https://github.com/wlaeri/personal-site"
        target="_blank"
        rel="noreferrer"
      >
        <Button m={3}>View source code</Button>
      </a>

      {/* Page content container */}
      <MainContainer>
        <Flex m={4}>
          <RoundedImage
            src="/headshot.jpeg"
            alt="Headshot of Will Laeri"
            width={380}
            height={380}
            quality={100}
            priority
          />
        </Flex>
        <TextContent mb={5}>
          <Title>Will Laeri</Title>
          <H2>Engineering Leader</H2>
          <EmojiList
            listItems={[
              {
                emoji: '👋',
                content:
                  'Hi, my name is Will and I love building software systems that solve real world business problems.',
              },
              {
                emoji: '🚀',
                content: `I have ${timeShippingProuductionCode} years of experience shipping code to production.`,
              },
              {
                emoji: '📈',
                content: `And ${timeLeadingTeams} years of experience building and leading technology teams.`,
              },
            ]}
          />
        </TextContent>
      </MainContainer>

      {/* Social links and copyright footer */}
      <footer>
        <Grid
          mb={4}
          p={4}
          sx={{
            background: 'text',
            color: 'background',
            boxShadow,
          }}
          gap={3}
          columns={[1, 2, 4]}
        >
          <SocialLink
            title="Email"
            subtitle="wlaeri@gmail.com"
            href="mailto:wlaeri@gmail.com"
            src="/icons/gmail.svg"
            alt="Gmail icon"
          />
          <SocialLink
            title="Phone"
            subtitle="(203) 895-5508"
            href="tel:+12038955508"
            src="/icons/phone.svg"
            alt="Phone icon"
          />
          <SocialLink
            title="LinkedIn"
            subtitle="in/wlaeri"
            href="https://linkedin.com/in/wlaeri"
            src="/icons/linkedin.svg"
            alt="LinkedIn icon"
          />
          <SocialLink
            title="GitHub"
            subtitle="wlaeri"
            href="https://github.com/wlaeri"
            src="/icons/github.svg"
            alt="GitHub icon"
          />
        </Grid>
        <CopyRight mb={4}>
          <H5>&copy; {now.getFullYear()} Will Laeri</H5>
          <H5>All rights reserved.</H5>
        </CopyRight>
      </footer>
    </div>
  )
}

export default Home
