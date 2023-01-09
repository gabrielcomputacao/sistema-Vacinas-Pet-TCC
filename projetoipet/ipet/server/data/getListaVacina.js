
const database = require("../infra/database/poolDatabase")


exports.getListaVacina = async function (iduser){

    try {
        
        const dataB = await database();
        const sql = "SELECT *FROM aplicacao WHERE iduser = $1";
        const values = [iduser]
        const listaVacina = await dataB.query(sql,values);
        await dataB.end();

        return listaVacina;

    } catch (error) {
        console.log(error)
    }
}
