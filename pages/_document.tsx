import Document, { Html, Head, Main, NextScript } from 'next/document'
import { NextStrictCSP } from 'next-strict-csp'
import { theme } from '../components/theme'

const GOOGLE_TAG_MANAGER_ID = 'GTM-56JWM9X'

const googleTagManagerScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');`

// Hash scripts for strict content security policy
NextStrictCSP.inlineJs = [googleTagManagerScript]
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
        </body>
      </Html>
    )
  }
}

export default MyDocument
