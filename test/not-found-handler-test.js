import test from 'tape';
import request from 'supertest';
import app from '../src/index';

test('404 handler', (t) => {
  t.plan(3);
  request(app)
    .get('/not-exsits')
    .expect(404)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.equal(res.status, 404, 'sets status code');
      t.equal(res.body.status, 404, 'sets body.status');
      t.equal(res.body.message, 'page not found', 'sets body.message');
    });
});

test.onFinish(() => process.exit(0));
