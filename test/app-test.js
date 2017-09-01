const assert = require('assert')
const request = require('supertest')
const td = require('testdouble')

module.exports = {
  beforeEach: (done) => {
    this.subject =  require('../lib/app')
    done()
  },
  afterEach: (done) => {
    this.server.close()
    done()
  },
  'App | Unit |': {
    'Sets default port': (done) => {
      this.server = this.subject()
      assert.equal(this.server.address().port, 3000)
      done()
    },
    'Sets @port': (done) => {
      this.server = this.subject(3333)
      assert.equal(this.server.address().port, 3333)
      done()
    }
  },
  'App | Integration |': {
    'Not found handler': (done) => {
      this.server = this.subject(3333)
      request(this.server).get('/').end((err, res) => {
        assert.equal(res.status, 404)
        assert.equal(res.body.message, 'Not Found')
        done(err)
      })
    }
  }
}
