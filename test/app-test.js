const assert = require('assert')
const request = require('supertest')

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
    'Default 404': (done) => {
      this.server = this.subject(3333)
      request(this.server).get('/').end((err, res) => {
        assert.equal(res.status, 404)
        done(err)
      })
    }
  }
}
