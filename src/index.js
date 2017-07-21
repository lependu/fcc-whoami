import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import notFoundHandler from './not-found-handler';
import errorHandler from './error-handler';

const { json } = bodyParser;

const app = express();

// logger
if (app.get('env') !== 'test') {
  app.use(morgan('dev'));
}

// body-praser
app.use(json());

app.use('/whoami', routes());

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(3000, () => {
});

export default app;
