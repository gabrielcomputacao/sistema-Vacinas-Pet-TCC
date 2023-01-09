const database = require('../infra/database/poolDatabase')

exports.insertProprietario = async function (proprietario){

    try {
        const dataB = await database();
        
        const sql = 'INSERT INTO proprietario(nome,cpf,telefone,obs,id_user) VALUES ($1,$2,$3,$4,$5)';
        const values = [proprietario.nome,proprietario.cpf,proprietario.telefone,proprietario.obs,proprietario.id_user];
        const proprietario = await dataB.query(sql, values);

        await dataB.end();
        return proprietario;
    } catch (error) {
        console.log(error)
    }
}
