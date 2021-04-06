/* eslint-disable no-console */
/* eslint-disable import/order */
import { errorHandler } from 'graphql-api-koa';
import { router } from './router';
import { errorMiddleware } from './middlewares/errorMiddleware';
import { authMiddleware } from './middlewares/authMiddleware';

import Bodyparser = require('koa-bodyparser');
import Koa = require('koa');

const app = new Koa();

app.use(Bodyparser());
app.use(errorHandler());
app.use(errorMiddleware);
app.use(authMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8000, () => {
  console.log('server is running!');
});
