const database = require("../infra/database/poolDatabase")


exports.getEnderecoId = async function(idend){

    try {

        database.connect();
        const sql = "SELECT id_endereco from endereco WHERE id_userend=$1";
        let values = [idend.idusuario]
        const dados = await database.query(sql,values) ;

        return dados;

    } catch (error) {
        console.log(error)
    }
}