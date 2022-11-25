
const proprietarioService = require('../data/insertPorprietario')

exports.insertProprietario = function (proprietario){
    return proprietarioService.insertProprietario(proprietario)
}


