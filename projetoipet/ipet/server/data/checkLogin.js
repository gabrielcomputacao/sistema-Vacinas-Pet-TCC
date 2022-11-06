

const database = require("../infra/database/database")


exports.checkLogin = async function(user){

    try{
        
        database.connect()
        console.log("banco de dados conectado!")
        let sql = "SELECT nome,senha from usuario WHERE nome=$1 AND senha =$2"
        let values = [user.usuario , user.senha]
        return await database.query(sql , values);

    }catch(ex){
        console.log(ex)
    }

}