
const database = require('../infra/database/poolDatabase')

exports.getProprietario = async function(stateUser){

    try {

        const dataB = await database();
        const sql = "SELECT nome from proprietario WHERE id_user= $1";
        let values = [stateUser];
        const nomes = await dataB.query(sql, values);

        return nomes;

    } catch (error) {
        console.log(error)
    }
}
