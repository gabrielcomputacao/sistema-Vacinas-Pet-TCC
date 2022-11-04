const database = require("../infra/database/database")

exports.insertUsers = async function(user){

    try{

        database.connect()
        console.log("conexao feita com sucesso!")
        const sql = 'INSERT INTO usuario(nome,email,senha,tipo) VALUES ($1,$2,$3,$4);';
        const values = [user.nome,user.email,user.senha,user.tipo];
        return await database.query(sql,values)

    }catch(ex){
        console.log(ex)
    }

}