const Plataforma = require('./ProductManager.js');

async function main() {
    const plataforma = new Plataforma();

    await plataforma.producto(); 

    await plataforma.readJSON();
    
    console.table(plataforma.products);
}

main();