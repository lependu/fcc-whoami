import test from 'tape';
import request from 'supertest';
import app from '../src/index';

test('GET /whoami | multiple ip in X-Forwarded-For header', (t) => {
  t.plan(3);
  request(app)
    .get('/whoami')
    .set('X-Forwarded-For', '192.168.1.1, 172.28.0.1')
    .set('Accept-Language', 'en-US,en;q=0.5')
    .set('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64; rv:45.0) Gecko/20100101 Firefox/45.0')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      let expected = {
        "ipaddress": "192.168.1.1",
        "language": "en-US",
        "software": "Mozilla/5.0 (X11; Linux x86_64; rv:45.0) Gecko/20100101 Firefox/45.0"
      };
      t.error(err, 'returns no error');
      t.equal(res.status, 200, 'status code: 200');
      t.deepEqual(res.body, expected, 'returns body');
    });
});

test('GET /whoami | one ip in X-Forwarded-For header', (t) => {
  t.plan(3);
  request(app)
    .get('/whoami')
    .set('X-Forwarded-For', '192.168.1.1')
    .set('Accept-Language', 'en-US,en;q=0.5')
    .set('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64; rv:45.0) Gecko/20100101 Firefox/45.0')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      let expected = {
        "ipaddress": "192.168.1.1",
        "language": "en-US",
        "software": "Mozilla/5.0 (X11; Linux x86_64; rv:45.0) Gecko/20100101 Firefox/45.0"
      };
      t.error(err, 'returns no error');
      t.equal(res.status, 200, 'status code: 200');
      t.deepEqual(res.body, expected, 'returns body');
    });
});

test('GET /whoami | missing header error', (t) => {
  t.plan(3);
  request(app)
    .get('/whoami')
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err, 'handles error');
      let expected = {
        status: 400,
        message: 'Bad request | Missing request header(s)'
      };
      t.equal(res.status, 400, 'status code: 400');
      t.deepEqual(res.body, expected, 'returns error message');
    });
});

test.onFinish(() => process.exit(0));
