require('babel-core/register')({});

//Adding a Development Server
let webpack = require('webpack')
let webpackDevMiddleware = require('webpack-dev-middleware')
let webpackHotMiddleware = require('webpack-hot-middleware')
let config = require('./webpack.development.config')
let path = require('path')
let Express = require('express')
let requestHandler = require('./requestHandler')

let app = new Express()
let port = 9000

let compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}))

app.use(webpackHotMiddleware(compiler))

delete process.env.BROWSER;


app.get('/dist/main.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/main.css'))
});

app.use(requestHandler);

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
