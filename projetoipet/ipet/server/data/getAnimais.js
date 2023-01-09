
const database = require("../infra/database/poolDatabase")


exports.getAnimais = async function(iduser){

    try {
        const dataB = await database();
        const sql = "SELECT *from animal WHERE cod_usuario = $1";
        const values = [iduser]
        const animais = await dataB.query(sql,values);

        dataB.end();

        return animais;
        
    } catch (error) {
        console.log(error)
    }


}


