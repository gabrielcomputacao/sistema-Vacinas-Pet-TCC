

const getListaVacina = require("../data/getListaVacina")

exports.getListaVacinaService = async function(iduser){
       return  await getListaVacina.getListaVacina(iduser) 
}