import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { App } from './src/Components'

function handleRender(req,res) {
	// first create a context for <StaticRouter>, it's where we keep the
  // results of rendering for the second pass if necessary
  const context = {}
  // render the first time
  let markup = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <html>
        <head>
          <title>Advanced React Router Usage</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css" />
          <link href="dist/main.css" media="all" rel="stylesheet" />
        </head>
        <body>
          <div id="main">
            <App/>
          </div>
          <script src="dist/bundle.js"></script>
        </body>
      </html>
    </StaticRouter>
  )

  // the result will tell you if it redirected, if so, we ignore
  // the markup and send a proper redirect.
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(markup)
    res.end()
  }
}
module.exports = handleRender