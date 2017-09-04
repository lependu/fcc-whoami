const express = require('express')
const bodyParser = require('body-parser')
const { json } = bodyParser
const whoami = require('./whoami')
const notFound = require('./not-found')
const errorHandler = require('./error-handler')

/**
 * @module App
 *
 * Sets up Express application.
 *
 * @param {Number} port Application port
 *
 * @return {Object} HTTP server
 *
 * @public
**/
module.exports = (port) => {
  let app = express()
  app.use(json())
  app.use('/whoami', whoami)
  app.use(notFound())
  app.use(errorHandler())
  return app.listen(port || 3000)
}
