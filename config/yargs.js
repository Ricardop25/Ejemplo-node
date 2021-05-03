//La utilidad de yargs es crear comandos por consola para hacer distintas a acciones o operaciones
//Documentacion: https://yargs.js.org/docs/

const argv = require('yargs')
.option('b',{
    alias: 'Base',
    type: 'number',
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar"

})
.option('l',{
    alias: 'Listar',
    type: 'boolean',
    default: false,
    demandOption: false,
    describe: "Lista o muestra la tabla en consola"

})
.option('h',{
    alias: 'Hasta',
    type: 'number', 
    default: 10,
    demandOption: false,
    describe: "Define hasta donde llegara la multiplicación"

})
.check( (argv, options) =>{

    if( isNaN( argv.b ) ){
        throw 'La base tiene que ser un numero'
    }
    return true;
})

.argv;


module.exports = argv;