const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, l = false, h = 10 ) => {

    if(l){
        console.log( '======================='.blue )
        console.log( colors.green('       Tabla del ', colors.green(base), 'Hasta el ', h ) ) 
        console.log( '======================='.blue )
    }
   


    try{

        let consola = '';
        let salida = '';

        for (let index = 1; index <= h; index++) {

            salida += `${base} x ${index} = ${base*index}\n`
            consola += `${colors.green(base)} ${ 'x'.blue } ${colors.green(index)} ${ '='.blue } ${colors.green(base*index)}\n` 
    
        }

        if(l){
            console.log(consola)
        }
        

        fs.writeFileSync( `./salida/Tabla-${base}.txt`, salida);

        return `tabla-${ base }.txt`;
      

    }catch( error ){
        throw error;
    }


}

module.exports = { 

    crearArchivo


 }