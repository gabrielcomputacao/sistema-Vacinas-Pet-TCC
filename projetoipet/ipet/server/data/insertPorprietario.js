const database = require('../infra/database/poolDatabase')

exports.insertProprietario = async function (proprietario){

    try {
        database.connect()
        console.log("conexão feita com sucesso!");
        const sql = 'INSERT INTO proprietario(nome,cpf,telefone,obs,id_user) VALUES ($1,$2,$3,$4,$5)';
        const values = [proprietario.nome,proprietario.cpf,proprietario.telefone,proprietario.obs,proprietario.id_user];
        return await database.query(sql, values);
    } catch (error) {
        console.log(error)
    }
}
