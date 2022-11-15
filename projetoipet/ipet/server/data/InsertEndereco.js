
const poolDatabase = require("../infra/database/poolDatabase")

exports.InsertEndereco = async function(user){
    try{

        await poolDatabase.connect()
        console.log("conexao feita com sucesso!")
        const sql = 'INSERT INTO endereco(rua,cep,bairro,numero,cidade,estado,referencia,id_userend) VALUES ($1,$2,$3,$4,$5,$6,$7,$8);';
        const values = [user.rua,user.cep,user.bairro,user.numero,user.cidade,user.estado,user.referencia,user.idusuario];
        const endereco = await poolDatabase.query(sql,values)
        
        return endereco;

    }catch(ex){
        console.log(ex)
    }
}
