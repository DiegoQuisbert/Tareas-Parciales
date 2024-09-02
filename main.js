const fs = require('fs/promises');

const pathNota1 = 'nota1.txt';
const pathNota2 = 'nota2.txt';
const pathFrase = 'frase.txt';

async function escribir() {
    await fs.writeFile(pathNota1, 'Los módulos son unidades de código reutilizables');
    await fs.writeFile(pathNota2, 'Que permiten organizar y encapsular funcionalidades en archivos separados');

    const data1 = await fs.readFile(pathNota1, 'utf-8');
    const data2 = await fs.readFile(pathNota2, 'utf-8');

    const frase = (data1 + ' ' + data2).toUpperCase();

    console.log(frase);

    await fs.writeFile(pathFrase, frase);
}

escribir().catch(err => console.error('Error:', err));
