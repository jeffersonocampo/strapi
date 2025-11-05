/**
 * discount-code router
 */

import { factories } from '@strapi/strapi';

const defaultRouter = factories.createCoreRouter('api::discount-code.discount-code');

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes.concat(extraRoutes);
      return routes;
    },
  };
};

const myExtraRoutes = [
  {
    method: 'GET',
    path: '/discount-codes/validate/:code',
    handler: 'discount-code.validateCode',
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: 'POST',
    path: '/discount-codes/increment/:code',
    handler: 'discount-code.incrementUsage',
    config: {
      policies: [],
      middlewares: [],
    },
  },
];

export default customRouter(defaultRouter, myExtraRoutes);
