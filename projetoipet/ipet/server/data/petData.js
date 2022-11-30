const database = require("../infra/database/poolDatabase")

exports.getCadastroPessoa = function(){

    try{
        const dataB = database();
        
        const results = dataB.query("SELECT * FROM usuario").then(res =>{
            const rows = res.rows;
            return rows;
        })
        return results;
    }catch(ex){
        console.log("falha na conexao \n" + ex)
    }
    
}
