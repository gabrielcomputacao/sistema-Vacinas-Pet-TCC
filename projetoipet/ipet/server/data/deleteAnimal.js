
const database = require("../infra/database/poolDatabase")


exports.deletAnimal = async function(id){


    try {
        const dataB =  await database();
         const sql = "DELETE from animal where id_animal= $1"
        const values = [id];

        const result = await dataB.query(sql,values);

        return result;
        
    } catch (error) {
        console.log(error)
    }

   
}