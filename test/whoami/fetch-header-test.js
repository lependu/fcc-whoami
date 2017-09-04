const assert = require('assert')
const td = require('testdouble')

module.exports = {
  beforeEach: () => {
    this.subject = require('../../lib/whoami/fetch-header')
    this.req = td.object({ get: () => {} })
  },
  'Fetch Header | Unit |': {
    'Multiple ip addresses': () => {
      td.when(this.req.get('X-Forwarded-For'))
        .thenReturn('192.168.1.1, 172.0.0.1')
      let result = this.subject(this.req, 'X-Forwarded-For')
      assert.equal(result, '192.168.1.1')
    },
    'Language format': () => {
      td.when(this.req.get('Accept-Language')).thenReturn('en-US,en;q=0.5')
      let result = this.subject(this.req, 'Accept-Language')
      assert.equal(result, 'en-US')
    },
    'User Agent format': () => {
      td.when(this.req.get('User-Agent'))
        .thenReturn('Mozilla/5.0 (X11; Linux x86_64; rv:45.0) Gecko/20100101 Firefox/45.0')
      let result = this.subject(this.req, 'User-Agent')
      assert.equal(result, 'X11; Linux x86_64; rv:45.0')
    }
  }
}
