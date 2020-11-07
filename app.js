// requireds
//const fs = require('express');
//const fs = require('../fs');
const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err))
        break;

    default:
        console.log('comando no reconocido');
        break;
}


//let base = 'hola';
//console.log(process.argv);

//let argv2 = process.argv;
/* let parametro = argv[2];
let base = parametro.split('=')[1]; */

/* 
let data = ''

for (let i = 1; i <= 12; i++) {
    data += `${base}*${i}=${base*i}\n`;

}

//const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ah sido creado!`);
}); */

/* crearArchivo(base)
    .then(archivo => console.log(`Archivo creado  ${archivo}`))
    .catch(err => console.log(err)) */