const fetchHeader = require('./fetch-header')

/**
 * @module Whoami
 *
 * Returns parsed request headers.
 *
 * @param {Object} req HTTP request
 * @param {Object} res HTTP response
 *
 * @return {Function}
 *
 * @public
**/
module.exports = (req, res) => {
  res.status(200).send({
    ipaddress: fetchHeader(req, 'X-Forwarded-For'),
    language: fetchHeader(req, 'Accept-Language'),
    software: fetchHeader(req, 'User-Agent')
  })
}
