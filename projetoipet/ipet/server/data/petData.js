const database = require("../infra/database/poolDatabase")

exports.getCadastroPessoa = async function(){

    try{
        const dataB = await database();
        
        const results = await dataB.query("SELECT * FROM usuario").then(res =>{
            const rows = res.rows;
            return rows;
        })


       await dataB.end();

        return results;

    }catch(ex){
        console.log("falha na conexao \n" + ex)
    }
    
}
