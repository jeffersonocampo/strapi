"use strict";
/**
 * discount-code controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::discount-code.discount-code', ({ strapi }) => ({
    /**
     * Validar un código de descuento
     */
    async validateCode(ctx) {
        try {
            const { code } = ctx.params;
            if (!code) {
                return ctx.badRequest('Code is required');
            }
            // Buscar el código (case insensitive)
            const discountCode = await strapi.db.query('api::discount-code.discount-code').findOne({
                where: {
                    code: code.toLowerCase(),
                    isActive: true,
                    publishedAt: { $notNull: true }
                }
            });
            if (!discountCode) {
                return ctx.notFound('Discount code not found or inactive');
            }
            // Verificar si ha expirado
            if (discountCode.expiresAt && new Date(discountCode.expiresAt) < new Date()) {
                return ctx.badRequest('Discount code has expired');
            }
            // Verificar si ha alcanzado el límite de usos
            if (discountCode.maxUses && discountCode.usedCount >= discountCode.maxUses) {
                return ctx.badRequest('Discount code has reached its usage limit');
            }
            // Devolver el código válido
            return ctx.send({
                data: {
                    code: discountCode.code,
                    type: discountCode.type,
                    value: discountCode.value,
                    description: discountCode.description
                }
            });
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
    /**
     * Incrementar el contador de usos
     */
    async incrementUsage(ctx) {
        try {
            const { code } = ctx.params;
            if (!code) {
                return ctx.badRequest('Code is required');
            }
            const discountCode = await strapi.db.query('api::discount-code.discount-code').findOne({
                where: {
                    code: code.toLowerCase()
                }
            });
            if (!discountCode) {
                return ctx.notFound('Discount code not found');
            }
            // Incrementar el contador
            const updatedCode = await strapi.entityService.update('api::discount-code.discount-code', discountCode.id, {
                data: {
                    usedCount: discountCode.usedCount + 1
                }
            });
            return ctx.send({
                data: {
                    usedCount: updatedCode.usedCount
                }
            });
        }
        catch (error) {
            ctx.throw(500, error);
        }
    }
}));
