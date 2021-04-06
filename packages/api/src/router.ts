/* eslint-disable import/order */
import { execute } from 'graphql-api-koa';
import Playground from 'graphql-playground-middleware-koa';

import { schema } from './graphql';
import { getContext } from './graphql/context';

import Router = require('@koa/router');

const router = new Router();

router.get('/hello', (ctx) => {
  ctx.body = 'hello';
});

router.all('/playground', Playground({ endpoint: '/graphql' }));

router.post(
  '/graphql',
  execute({
    override: (ctx) => ({
      schema,
      contextValue: getContext(ctx),
    }),
  }),
);

export { router };
