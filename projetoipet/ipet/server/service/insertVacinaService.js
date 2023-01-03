const vacinaService = require("../data/insertVacina")

exports.vacinaService = async function(vacina){
    return await vacinaService.insertVacina(vacina)
}