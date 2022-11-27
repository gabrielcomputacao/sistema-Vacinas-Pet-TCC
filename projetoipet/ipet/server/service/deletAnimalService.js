

const deletA = require("../data/deleteAnimal");

exports.deletAnimais = async function(id){
    return await deletA.deletAnimal(id)
}

