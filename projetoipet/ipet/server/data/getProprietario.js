
const database = require('../infra/database/poolDatabase')

exports.getProprietario = async function(stateUser){

    try {

        database.connect()
        const sql = "SELECT nome from proprietario WHERE id_user= $1";
        let values = [stateUser];
        const nomes = await database.query(sql, values);

        return nomes;

    } catch (error) {
        console.log(error)
    }
}
