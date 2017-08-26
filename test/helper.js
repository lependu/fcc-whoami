const td = require('testdouble')

module.exports = {
  afterEach: () => {
    td.reset()
  }
}
