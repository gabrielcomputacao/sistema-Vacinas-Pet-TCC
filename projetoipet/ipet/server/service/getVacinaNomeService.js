
const vacinaNome = require("../data/getVacinaNome")

exports.getVacinaNomeService = function (iduser){
    return vacinaNome.getVacinaNome(iduser)
}
