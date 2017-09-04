const fetchHeader = require('./fetch-header')

module.exports = (req, res) => {
  res.status(200).send({
    ipaddress: fetchHeader(req, 'X-Forwarded-For'),
    language: fetchHeader(req, 'Accept-Language'),
    software: fetchHeader(req, 'User-Agent')
  })
}
