module.exports = () => {
  return (req, res, next) => {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
  }
}
