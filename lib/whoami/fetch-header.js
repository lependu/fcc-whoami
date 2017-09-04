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
