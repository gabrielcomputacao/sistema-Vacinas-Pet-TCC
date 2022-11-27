
const database = require("../infra/database/poolDatabase")


exports.getAnimais = async function(){

    try {
        database.connect();
        const sql = "SELECT *from animal";
        const animais = await database.query(sql);

        return animais;
    } catch (error) {
        console.log(error)
    }


}


