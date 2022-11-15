
const getEndereco = require("../data/getEndereco")

exports.getIdEnd = async function(idend){
    return getEndereco.getEnderecoId(idend)
};