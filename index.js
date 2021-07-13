'use strict';

import Hapi from '@hapi/hapi'
import {getPrice,getProducts} from './controllers/product-controller.js'


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    server.route({
        method: 'GET',
        path: '/products',
        handler: (request, h) => {

           return getProducts(request,h);
        }
    });
    server.route({
        method: 'POST',
        path: '/calculatePrice',
        handler: (request, h) => {

            return getPrice(request,h);
        }
    });


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();