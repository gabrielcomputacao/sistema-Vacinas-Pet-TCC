const database = require("../infra/database/poolDatabase")


exports.getEnd = async function(endereco){
    try {
        database.connect();
        const sql = "SELECT id_endereco from endereco WHERE rua=$1 AND cep=$2 AND numero=$3";
        let values = [endereco.rua , endereco.cep , endereco.numero];
        const dado = await database.query(sql , values);

        return dado;

    } catch (error) {
         console.log(error)
    }
}