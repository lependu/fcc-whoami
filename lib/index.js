const express = require('express')

module.exports = () => {
  let app = express()

  app.listen(3000, () => {
    console.log('App listening on port 3000')
  })

  return app
}
