const fs = require('fs');


const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
    
        let salida = '';
    
        for ( let i = 1; i <= hasta ; i++) {
            salida += ` ${base} x ${ i } = ${ base * i }\n`;
        }
        
        if ( listar ) {
            
            console.log('=============='.red);
            console.log(' Tabla del'.green, base );
            console.log('=============='.red);
            console.log(salida);

        }

        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );
        return `tabla-${base}.txt`;

    } catch (err) {
        return err
    }

}

module.exports = {
    crearArchivo
}