
const getAnimal = require("../data/getAnimais")

exports.getAnimalService = function(iduser){
    return getAnimal.getAnimais(iduser)
}