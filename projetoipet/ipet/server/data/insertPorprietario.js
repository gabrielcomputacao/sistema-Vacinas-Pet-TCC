const database = require('../infra/database/databaseMysql')

exports.insertProprietario = async function (proprietario){

    try {
        const dataB = await database();
        
        const sql = 'INSERT INTO proprietario(nome,cpf,telefone,obs,id_user) VALUES (?,?,?,?,?)';
        const values = [proprietario.nome,proprietario.cpf,proprietario.telefone,proprietario.obs,proprietario.id_user];
        const proprietarioResult = await dataB.query(sql, values);

        /* await dataB.end(); */

        return proprietarioResult;

        
    } catch (error) {
        console.log(error)
    }
}
