
/* const poolDatabase = require("../infra/database/poolDatabase") */
const poolDatabase = require("../infra/database/databaseMysql")



exports.InsertEndereco = async function(user){
    try{

        const dataB = await poolDatabase()
        const sql = 'INSERT INTO endereco(rua,cep,bairro,numero,cidade,estado,referencia) VALUES (?,?,?,?,?,?,?);';
        const values = [user.rua,user.cep,user.bairro,user.numero,user.cidade,user.estado,user.referencia];
        const endereco = await dataB.query(sql,values)
       /*  await dataB.end(); */
        return endereco;

    }catch(ex){
        console.log(ex)
    }
}
