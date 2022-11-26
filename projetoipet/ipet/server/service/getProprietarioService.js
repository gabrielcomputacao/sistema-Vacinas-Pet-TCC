
const getNomesProp = require("../data/getProprietario");

exports.getNomesProp = function(stateUser){
    return getNomesProp.getProprietario(stateUser)
}