const database = require("../infra/database/poolDatabase")


exports.getEnd = async function(endereco){
    try {
        const dataB =  await database();
        const sql = "SELECT id_endereco from endereco WHERE rua=$1 AND cep=$2 AND numero=$3";
        let values = [endereco.rua , endereco.cep , endereco.numero];
        const dado = await dataB.query(sql , values);
        await dataB.end();
        return dado;

    } catch (error) {
         console.log(error)
    }
}