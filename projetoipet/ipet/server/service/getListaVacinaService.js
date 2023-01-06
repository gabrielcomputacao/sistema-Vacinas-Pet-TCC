

const getListaVacina = require("../data/getListaVacina")

exports.getListaVacinaService = async function(){
       return  await getListaVacina.getListaVacina() 
}