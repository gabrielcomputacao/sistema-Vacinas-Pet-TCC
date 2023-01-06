
const database = require("../infra/database/poolDatabase")


exports.getListaVacina = async function (){

    try {
        
        const dataB = await database();
        const sql = "SELECT *FROM aplicacao";

        const listaVacina = await dataB.query(sql);

        return listaVacina;

    } catch (error) {
        console.log(error)
    }
}
