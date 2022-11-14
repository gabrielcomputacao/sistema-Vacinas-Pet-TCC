
const database = require("../infra/database/database")

exports.InsertEndereco = async function(user){
    try{

        database.connect()
        console.log("conexao feita com sucesso!")
        const sql = 'INSERT INTO endereco(rua,cep,bairro,numero,cidade,estado,referencia) VALUES ($1,$2,$3,$4,$5,$6,$7);';
        const values = [user.rua,user.cep,user.bairro,user.numero,user.cidade,user.estado,user.referencia];
        return await database.query(sql,values)

    }catch(ex){
        console.log(ex)
    }
}
