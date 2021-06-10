const { crearArchivo } = require('./helpers/multiply');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();
// Test no viable
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err) );
