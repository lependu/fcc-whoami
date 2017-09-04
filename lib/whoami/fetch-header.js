/**
 * @module Whoami/fetch-header
 *
 * Returns parsed request header.
 *
 * @param {Object} req HTTP request
 * @param {String} header The name of the header to be parsed.
 *
 * @return {?String} The header value.
 *
 * @public
**/
module.exports = (req, header) => {
  if (!req.get(header)) {
    return null
  } else if (header === 'User-Agent') {
    let parts = req.get(header).split(/[()]+/).filter(e => {
      return e
    })
    return parts[1]
  } else {
    return req.get(header).split(',')[0]
  }
}
