export default (req, res) => {
  res.status(404).send({ status: 404, message: 'page not found' });
  res.end();
}

