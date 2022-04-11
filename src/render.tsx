import React from 'react'
import * as ReactDOMServer from 'react-dom/server'

const title = 'Hello!'
const content = 'Hello world'

const indexPage = (
  <html>
    <head>
      <title>{title}</title>
    </head>
    <body>
      <p>{content}</p>
    </body>
  </html>
)

const indexPageString = ReactDOMServer.renderToStaticMarkup(indexPage)
console.log(indexPageString)
