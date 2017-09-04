const assert = require('assert')
const request = require('supertest')

module.exports = {
  beforeEach: (done) => {
    let app =  require('../../lib/app')
    this.server = app(3333)
    done()
  },
  afterEach: (done) => {
    this.server.close()
    done()
  },
  'Endpoint | GET /whoami |': {
    'Returns headers': (done) => {
      request(this.server)
      .get('/whoami')
      .set('X-Forwarded-For', 'ip-address')
      .set('Accept-Language', 'language-code')
      .set('User-agent', 'removed part (user-agent) removed part')
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.ipaddress, 'ip-address')
        assert.equal(res.body.language, 'language-code')
        assert.equal(res.body.software, 'user-agent')
        done(err)
      })
    },
    'Missing headers': (done) => {
      request(this.server)
      .get('/whoami')
      // Removes defult supertest User-Agent header
      .unset('User-Agent')
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.ipaddress, null)
        assert.equal(res.body.language, null)
        assert.equal(res.body.software, null)
        done(err)
      })
    }
  }
}
