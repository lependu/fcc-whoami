import { Router } from 'express';

export default () => {

  let router = Router();

  router.get('/', (req, res) => {
    if ( !req.get('User-Agent') ||
         !req.get('Accept-Language') ||
         !req.get('X-Forwarded-For')) {
      throw {
        status: 400,
        message: 'Bad request | Missing request header(s)'
      };
    } else {
      res.send({
        ipaddress: req.get('X-Forwarded-For').split(', ')[0],
        language: req.get('Accept-Language').split(',')[0],
        software: req.get('User-Agent')
      });
    }
  });

  return router;
}
