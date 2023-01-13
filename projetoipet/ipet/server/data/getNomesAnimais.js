
const database = require("../infra/database/poolDatabase")

exports.getNomeAnimal = async function (iduser){

    try {

        const dataB = await database();
        const sql = "SELECT *FROM animal WHERE cod_usuario = $1";
        let values = [iduser] ;
        const nomesAnimais = await dataB.query(sql,values);
        await dataB.end();
        return nomesAnimais;
        
    } catch (error) {
        console.log(error)
    }



}




