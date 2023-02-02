
const database = require("../infra/database/databaseMysql")


exports.getListaVacina = async function (iduser){

    try {
        
        const dataB = await database();
        const sql = "SELECT *FROM aplicacao WHERE iduser = ?";
        const values = [iduser]
        const [rows] = await dataB.query(sql,values);
        /* await dataB.end(); */

        return rows;

    } catch (error) {
        console.log(error)
    }
}
