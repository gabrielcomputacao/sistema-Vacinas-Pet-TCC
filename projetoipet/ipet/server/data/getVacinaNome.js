const database = require("../infra/database/poolDatabase")

exports.getVacinaNome = async function(idUser){

    try {
        
        const dataB = await database();
        const sql = "";
        const values = [idUser];
        
        const result = await dataB.query(sql,values)

        return result;

    } catch (error) {
        console.log(error)
    }

}