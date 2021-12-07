//const fortune = require('./lib/fortune')
const express = require('express')
const { engine } = require('express-handlebars')

const app = express()

const handlers = require('./lib/handlers')

const port = process.env.PORT || 3000

app.get('/', handlers.home)
app.get('/about', handlers.about)
app.use(handlers.notFound)
app.use(handlers.serverError)



// configure Handlebars view engine
app.engine('handlebars', engine({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))




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