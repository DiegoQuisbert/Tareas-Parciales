const http = require('http');
const Plataforma = require('./ProductManager.js');

const port = 3000;
const productManager = new Plataforma();

const server = http.createServer(async (request, response) => {
    const url = request.url;
    const method = request.method;

    await productManager.readJSON();

    if (method === 'GET') {
        if (url === '/') {
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('Bienvenido al servidor de productos');
        } else if (url === '/productos') {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify(productManager.products));
        } else if (url.startsWith('/products/')) {
            const id = url.split('/')[2];
            const product = productManager.products.find(p => p.id === parseInt(id, 10));

            if (product) {
                response.writeHead(200, {'Content-Type': 'application/json'});
                response.end(JSON.stringify(product));
            } else {
                response.writeHead(404, {'Content-Type': 'text/plain'});
                response.end('Error 404 | Producto no encontrado');
            }
        } else {
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end('Error 404 | Ruta no encontrada');
        }
    } else {
        response.writeHead(405, {'Content-Type': 'text/plain'});
        response.end('Método no permitido');
    }
});

server.listen(port, () => {
    console.log('Servidor en el puerto', port);
});