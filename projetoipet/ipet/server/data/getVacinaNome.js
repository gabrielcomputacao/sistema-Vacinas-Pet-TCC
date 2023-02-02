const database = require("../infra/database/databaseMysql")

exports.getVacinaNome = async function(){

    try {
        
        const dataB = await database();
        const sql = "SELECT *from vacina";
        
        const [rows] = await dataB.query(sql);
        /* await dataB.end(); */
        return rows;

    } catch (error) {
        console.log(error)
    }

}