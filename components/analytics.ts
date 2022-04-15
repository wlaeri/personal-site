export const CLOUDFLARE_WEB_ANALYTICS_TOKEN = '7604b23c7a40459caef0d753bbf436b5'
export const GOOGLE_TAG_MANAGER_ID = 'GTM-56JWM9X'

// Cloudflare Insights Script
export const cloudflareWebAnalyticsScript = `var s = document.createElement('script')
s.src = 'https://static.cloudflareinsights.com/beacon.min.js'
s.setAttribute('data-cf-beacon', '{"token": "${CLOUDFLARE_WEB_ANALYTICS_TOKEN}"}')
document.body.appendChild(s)`

// Google Tag Manager Script (Optional)
export const googleTagManagerScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');`
