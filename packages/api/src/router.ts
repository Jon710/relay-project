/* eslint-disable import/order */
import { execute } from 'graphql-api-koa';

import { schema } from './graphql';

import Router = require('@koa/router');

const router = new Router();

router.get('/salve', (ctx) => {
  ctx.body = 'palmeiras';
});

router.post(
  '/graphql',
  execute({
    schema,
  }),
);

export { router };
