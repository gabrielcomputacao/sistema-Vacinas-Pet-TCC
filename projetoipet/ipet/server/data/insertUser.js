const database = require("../infra/database/databaseMysql")

exports.insertUsers = async function(user){

    try{

        const dataB = await database();
        const sql = 'INSERT INTO usuario(nome,email,senha,tipo,idendereco) VALUES (?,?,?,?,?);';
        const values = [user.nome,user.email,user.senha,user.tipo,user.idendereco];
        const userResponse = await dataB.query(sql,values)
        /* await dataB.end(); */

        return userResponse;
    }catch(ex){
        console.log(ex)
    }

}