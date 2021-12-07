const fortune = require('./fortune')

exports.home = (req, res) => res.render('home')

exports.about = (req, res) => res.render('about', {
    fortune: fortune.getFortune()
})

exports.notFound = (req, res) => res.render('404')

// Express recongizes the error handler by way of its four
// arguments, so we have to disable ESLint's no-unused-var rule
/* eslint-disable no-unused-vars */
exports.serverError = (erro, req, res, next) => res.render('500')
/* eslint-enable no-unused-vars */