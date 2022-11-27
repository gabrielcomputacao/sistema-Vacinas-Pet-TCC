
const database = require("../infra/database/poolDatabase")


exports.deletAnimal = async function(id){


    try {
        database.connect()
         const sql = "DELETE from animal where id_animal= $1"
        const values = [id];

        const result = await database.query(sql,values);

        return result;
    } catch (error) {
        console.log(error)
    }

   
}