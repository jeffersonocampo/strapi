"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    {
        name: 'strapi::cors',
        config: {
            enabled: true,
            origin: [
                'http://localhost:5173', // Vite dev server
                'http://localhost:4173', // Vite preview
                'http://localhost:3000', // Alternativo
                'http://127.0.0.1:5173',
                'http://127.0.0.1:4173',
                'https://mentalidadcampeona.com/inspirafest'
            ],
            headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
        },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
