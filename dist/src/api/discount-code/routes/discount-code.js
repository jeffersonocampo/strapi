"use strict";
/**
 * discount-code router
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
const defaultRouter = strapi_1.factories.createCoreRouter('api::discount-code.discount-code');
const customRouter = (innerRouter, extraRoutes = []) => {
    let routes;
    return {
        get prefix() {
            return innerRouter.prefix;
        },
        get routes() {
            if (!routes)
                routes = innerRouter.routes.concat(extraRoutes);
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
exports.default = customRouter(defaultRouter, myExtraRoutes);
