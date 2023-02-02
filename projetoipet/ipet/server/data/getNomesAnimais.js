
const database = require("../infra/database/databaseMysql")

exports.getNomeAnimal = async function (iduser){

    try {

        const dataB = await database();
        const sql = "SELECT *FROM animal WHERE cod_usuario = ?";
        let values = [iduser] ;
        const [rows] = await dataB.query(sql,values);
       /*  await dataB.end(); */
        return rows;
        
    } catch (error) {
        console.log(error)
    }



}




