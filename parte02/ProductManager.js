const fs = require('fs/promises'); 
const os = require('os');

class Plataforma {
    path = 'systemData.json';
    products = [];

    async producto() {
        try {
            const systemData = {
                cpu: os.cpus()[0].model, 
                plataforma: os.platform(),
                arquitectura: os.arch()
            };

            this.products.push(systemData);
            await this.writeJSON();
        } catch (error) {
            console.error('No se consiguieron los datos:', error);
        }
    }

    async writeJSON() {
        try {
            const data = JSON.stringify(this.products, null, 2);
            await fs.writeFile(this.path, data);
        } catch (error) {
            console.error('Error al escribir el archivo JSON:', error);
        }
    }

    async readJSON() {
        try {
            const data = await fs.readFile(this.path, 'utf-8');
            this.products = JSON.parse(data);
        } catch (error) {
            console.error('Error al leer el archivo JSON:', error);
            this.products = [];
        }
    }
}

module.exports = Plataforma;
