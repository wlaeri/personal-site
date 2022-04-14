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
