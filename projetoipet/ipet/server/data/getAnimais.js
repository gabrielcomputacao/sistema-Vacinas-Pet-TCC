
const database = require("../infra/database/poolDatabase")


exports.getAnimais = async function(){

    try {
        const dataB = await database();
        const sql = "SELECT *from animal";
        const animais = await dataB.query(sql);

        return animais;
        
    } catch (error) {
        console.log(error)
    }


}


