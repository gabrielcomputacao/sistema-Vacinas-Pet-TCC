
const cadAnimal = require("../data/insertAnimais")

exports.cadAnimalService = function(animal){
    return cadAnimal.insertAnimal(animal)
}
