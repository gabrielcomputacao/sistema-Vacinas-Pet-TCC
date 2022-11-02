const database = require("../infra/database/database")

exports.getCadastroPessoa = function(){

    try{
        database.connect();
        console.log("conexão feita com sucesso")
        const results = database.query("SELECT * FROM usuario").then(res =>{
            const rows = res.rows;
            return rows;
        })
        return results;
    }catch(ex){
        console.log("falha na conexao \n" + ex)
    }
    
}
