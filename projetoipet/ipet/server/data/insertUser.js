const database = require("../infra/database/poolDatabase")

exports.insertUsers = async function(user){

    try{

        const dataB = await database();
        const sql = 'INSERT INTO usuario(nome,email,senha,tipo,idendereco) VALUES ($1,$2,$3,$4,$5);';
        const values = [user.nome,user.email,user.senha,user.tipo,user.idendereco];
        const user = await dataB.query(sql,values)
        await dataB.end();

        return user;
    }catch(ex){
        console.log(ex)
    }

}