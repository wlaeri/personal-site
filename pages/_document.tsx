import Document, { Html, Head, Main, NextScript } from 'next/document'
import { theme } from '../components/theme'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content={theme.colors.background} />
          <link rel="apple-touch-icon" href="/pwa/maskable_icon.png" />
          <meta property="og:title" content="Will Laeri" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://willlaeri.com/headshot.jpeg"
          />
          <meta property="og:url" content="https://willlaeri.com" />
          <meta
            property="og:description"
            content="Full stack software engineering leader."
          />
          <meta property="og:site_name" content="Will Laeri" />
          <meta name="twitter:image:alt" content="A portrait of Will Laeri." />
          <meta
            name="apple-mobile-web-app-status-bar"
            content={theme.colors.background}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
