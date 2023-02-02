
const poolDatabase = require("../infra/database/databaseMysql")


exports.checkLogin = async function(user){

    try{
        const dataB = await poolDatabase();
        let sql = "SELECT id,nome,senha from usuario WHERE nome=? AND senha =?"
        let values = [user.usuario , user.senha]
        const [rows] = await dataB.query(sql , values);
        /* await dataB.end(); */
       /*  console.log(rows) */
        return rows;

    }catch(ex){
        console.log(ex)
    }

}