
const getNomeAnimais = require("../data/getNomesAnimais");

exports.getNomeAnimaisService = async function(iduser){
    return await getNomeAnimais.getNomeAnimal(iduser);
}
