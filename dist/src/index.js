"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Códigos de descuento predefinidos para INSPIRA FEST
const DISCOUNT_CODES = {
    // Códigos generales
    'inspiradores2025': {
        type: 'percentage',
        value: 10,
        expiresAt: null,
        description: 'Código general para inspiradores 2025',
        isActive: true
    },
    'estudiantes10': {
        type: 'percentage',
        value: 10,
        expiresAt: null,
        description: 'Descuento para estudiantes',
        isActive: true
    },
    'campeones10': {
        type: 'percentage',
        value: 10,
        expiresAt: null,
        description: 'Código especial campeones',
        isActive: true
    },
    'inspirafamily': {
        type: 'fixed',
        value: 74900,
        expiresAt: null,
        description: '¡Código aplicado! Precio especial familia',
        isActive: true
    },
    'soñadores25': {
        type: 'percentage',
        value: 10,
        expiresAt: new Date(2025, 10, 4, 23, 59, 59), // Noviembre 4, 2025
        description: '¡Código aplicado! Este código es válido hasta el 04 de noviembre ⏰',
        isActive: true
    },
    // Códigos de influencers - 10% de descuento
    'juanseblack': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Juan Se Black', isActive: true },
    'elezeta': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Elezeta', isActive: true },
    'casualmentejuanita': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Casualmente Juanita', isActive: true },
    'lorenacorrales': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Lorena Corrales', isActive: true },
    'oscarivan': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Oscar Ivan', isActive: true },
    'jesikarangel': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Jesika Rangel', isActive: true },
    'adrizamora': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Adriza Mora', isActive: true },
    'juliserrano': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Juli Serrano', isActive: true },
    'mariale': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Mariale', isActive: true },
    'maleavisa': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Male Avisa', isActive: true },
    'lamonita': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer La Monita', isActive: true },
    'donguz': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Don Guz', isActive: true },
    'mishellfc': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Mishell FC', isActive: true },
    'consebitas': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Consebitas', isActive: true },
    'lorenacoach': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Lorena Coach', isActive: true },
    'sebasrumba': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Sebas Rumba', isActive: true },
    'haroldvargas': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Harold Vargas', isActive: true },
    'felipelafe': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Felipe Lafe', isActive: true },
    'paulaguzman': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Paula Guzman', isActive: true },
    'gatobedoya': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Gato Bedoya', isActive: true },
    'sofipaez': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Sofi Paez', isActive: true },
    'vivipinzon': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Vivi Pinzón', isActive: true },
    'daniiemprende': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Danii Emprende', isActive: true },
    'marianagomez': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Mariana Gómez', isActive: true },
    '100%campo': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer 100% Campo', isActive: true },
    'hairs': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Hairs', isActive: true },
    'conejocreador': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Conejo Creador', isActive: true },
    'lamilafit': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer La Mila Fit', isActive: true },
    'mrpatata': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Mr Patata', isActive: true },
    'bbb': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer BBB', isActive: true },
    'cabelly': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Cabelly', isActive: true },
    'miguelito': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Miguelito', isActive: true },
    'kewao': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer Kewao', isActive: true },
    'jbkewao': { type: 'percentage', value: 10, expiresAt: null, description: 'Código de influencer JB Kewao', isActive: true }
};
exports.default = {
    /**
     * An asynchronous register function that runs before
     * your application is initialized.
     *
     * This gives you an opportunity to extend code.
     */
    register( /* { strapi }: { strapi: Core.Strapi } */) { },
    /**
     * An asynchronous bootstrap function that runs before
     * your application gets started.
     *
     * This gives you an opportunity to set up your data model,
     * run jobs, or perform some special logic.
     */
    async bootstrap({ strapi }) {
        // Seed discount codes automáticamente
        await seedDiscountCodes(strapi);
    },
};
/**
 * Seed de códigos de descuento
 * Solo crea códigos que no existan (idempotente)
 */
async function seedDiscountCodes(strapi) {
    try {
        console.log('🎫 Verificando códigos de descuento...');
        let createdCount = 0;
        let skippedCount = 0;
        let updatedCount = 0;
        for (const [code, data] of Object.entries(DISCOUNT_CODES)) {
            try {
                // Buscar si el código ya existe
                const existing = await strapi.db.query('api::discount-code.discount-code').findOne({
                    where: { code: code.toLowerCase() }
                });
                if (existing) {
                    // Si existe pero no está publicado, publicarlo
                    if (!existing.publishedAt) {
                        await strapi.entityService.update('api::discount-code.discount-code', existing.id, {
                            data: { publishedAt: new Date() }
                        });
                        updatedCount++;
                        console.log(`   ✅ Código publicado: ${code}`);
                    }
                    else {
                        skippedCount++;
                    }
                }
                else {
                    // Crear nuevo código
                    await strapi.entityService.create('api::discount-code.discount-code', {
                        data: {
                            code: code.toLowerCase(),
                            type: data.type,
                            value: data.value,
                            expiresAt: data.expiresAt,
                            description: data.description,
                            isActive: data.isActive,
                            usedCount: 0,
                            publishedAt: new Date() // Publicar automáticamente
                        }
                    });
                    createdCount++;
                    console.log(`   ✨ Código creado: ${code}`);
                }
            }
            catch (error) {
                console.error(`   ❌ Error procesando código ${code}:`, error.message);
            }
        }
        console.log(`\n📊 Resumen de códigos de descuento:`);
        console.log(`   ✨ Creados: ${createdCount}`);
        console.log(`   ✅ Publicados: ${updatedCount}`);
        console.log(`   ⏭️  Ya existían: ${skippedCount}`);
        console.log(`   📦 Total configurados: ${Object.keys(DISCOUNT_CODES).length}\n`);
    }
    catch (error) {
        console.error('❌ Error en seed de códigos de descuento:', error);
    }
}
