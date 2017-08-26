const express = require('express')
const bodyParser = require('body-parser')
const { json } = bodyParser

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
  return app.listen(port || 3000)
}
