const fs = require('fs');
var colors = require('colors');

let listarArchivo = (base, limite = 10) => {
    console.log('=================================='.green);
    console.log(`La tabla de ${base}`.green);
    console.log('=================================='.green);
    for (let i = 1; i <= limite; i++) {

        let respuesta = `La tabla de ${base} es: ${base}*${i}= ${base*i} `;
        console.log(respuesta);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`)
            return;
        }
        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i}\n`;

        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) { return reject(err); } else {
                resolve(`tabla-${base}.txt`)
            }

        });
    })
}

module.exports = {
    crearArchivo,
    listarArchivo

}