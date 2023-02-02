
const database = require('../infra/database/databaseMysql')

exports.getProprietario = async function(stateUser){

    try {

        const dataB = await database();
        const sql = "SELECT nome from proprietario WHERE id_user= ?";
        let values = [stateUser];
        const [rows] = await dataB.query(sql, values);
        /* await dataB.end(); */
        return rows;

    } catch (error) {
        console.log(error)
    }
}
