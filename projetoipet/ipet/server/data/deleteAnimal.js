
const database = require("../infra/database/databaseMysql")


exports.deletAnimal = async function(id){


    try {
        const dataB =  await database();
         const sql = "DELETE from animal where id_animal= ?"
        const values = [id];

        const [rows] = await dataB.query(sql,values);

        /* await dataB.end(); */

        return rows;
        
    } catch (error) {
        console.log(error)
    }

   
}