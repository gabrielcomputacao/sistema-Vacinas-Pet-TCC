const database = require("../infra/database/poolDatabase")

exports.getVacinaNome = async function(){

    try {
        
        const dataB = await database();
        const sql = "SELECT *from vacina";
        
        const result = await dataB.query(sql);

        return result;

    } catch (error) {
        console.log(error)
    }

}