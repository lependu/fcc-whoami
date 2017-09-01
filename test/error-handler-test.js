const assert = require('assert')
const request = require('supertest')
const td = require('testdouble')
const subject = require('../lib/error-handler')
const express = require('express')

module.exports = {
  'Error Handler | Integration |': {
    'Sets default status and message': (done) => {
      // Stubs app with dummy error page
      let app = express()
      app.use('/', (req, res, next) => {
        // Fires error handler without staus or message defined.
        next(true)
      })
      app.use(subject())
      // Creates HTTP server
      let server = app.listen(3333)

      request(server).get('/').end((err, res) => {
        assert.equal(res.status, 500)
        assert.equal(res.body.message, 'Internal Server Error')
        server.close()
        done(err)
      })
    }
  }
}
