

const poolDatabase = require("../infra/database/poolDatabase")


exports.checkLogin = async function(user){

    try{
        
        await poolDatabase.connect()
        console.log("banco de dados conectado! pool")
        let sql = "SELECT id,nome,senha from usuario WHERE nome=$1 AND senha =$2"
        let values = [user.usuario , user.senha]
        const dados = await poolDatabase.query(sql , values);
        

        return dados;
    }catch(ex){
        console.log(ex)
    }

}