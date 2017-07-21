import express from 'express';
import errorHandler from '../src/error-handler';
import test from 'tape';
import request from 'supertest';

const app = express();
app.get('/bad-request', (req, res) => {
  throw { status: 400, message: 'bad request' };
});
app.use(errorHandler);

test('error handler', (t) => {
  t.plan(3);
  request(app)
    .get('/bad-request')
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.equal(res.status, 400, 'sets status code');
      t.equal(res.body.status, 400, 'sets body.status');
      t.equal(res.body.message, 'bad request', 'sets body.message');
    });
});
