//const fortune = require('./lib/fortune')
const express = require('express')
const { engine } = require('express-handlebars')

const app = express()

const handlers = require('./lib/handlers')

const port = process.env.PORT || 3000


// configure Handlebars view engine
app.engine('handlebars', engine({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))


app.disable('x-powered-by')

app.get('/', handlers.home)
app.get('/about', handlers.about)
app.get('/headers', (req, res) => {
  res.type('text/plain')
  const headers = Object.entries(req.headers).map(([key, value]) => `${key} : ${value}`)
  res.send(headers.join('\n'))
})
app.use(handlers.notFound)
app.use(handlers.serverError)








// app.listen(port, () => console.log(
//   `Express started on http://localhost:${port}; ` +
//   `press Ctrl-C to terminate.`))

if(require.main === module) {
  app.listen(port, () => {
    console.log(`Express started on http://localhost.${port}` + '; press Ctrl-C to terminate.')

  })

}else {
  module.exports = app
}