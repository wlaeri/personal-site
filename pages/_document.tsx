import Document, { Html, Head, Main, NextScript } from 'next/document'
import { NextStrictCSP } from 'next-strict-csp'
import { theme } from '../components/theme'
import {
  cloudflareWebAnalyticsScript,
  googleTagManagerScript,
  GOOGLE_TAG_MANAGER_ID,
} from '../components/analytics'

// Hash scripts for strict content security policy
NextStrictCSP.inlineJs = [cloudflareWebAnalyticsScript, googleTagManagerScript]
const HeadCSP = process.env.NODE_ENV === 'production' ? NextStrictCSP : Head

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <HeadCSP>
          {process.env.NODE_ENV === 'production' && (
            <meta httpEquiv="Content-Security-Policy" />
          )}
          {process.env.NODE_ENV === 'production' && (
            <script
              dangerouslySetInnerHTML={{
                __html: googleTagManagerScript,
              }}
            />
          )}
          {process.env.NODE_ENV === 'production' && (
            <link
              rel="preconnect"
              href="https://static.cloudflareinsights.com"
            />
          )}
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
        </HeadCSP>
        <body>
          {process.env.NODE_ENV === 'production' && (
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
            />
          )}
          <Main />
          <NextScript />
          {process.env.NODE_ENV === 'production' && (
            <script
              dangerouslySetInnerHTML={{
                __html: cloudflareWebAnalyticsScript,
              }}
            />
          )}
        </body>
      </Html>
    )
  }
}

export default MyDocument
