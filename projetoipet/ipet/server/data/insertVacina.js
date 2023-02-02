const database = require("../infra/database/databaseMysql");



exports.insertVacina = async function(vacina){

    try {
        
        const dataB = await database();
        const sql = "INSERT INTO aplicacao(iduser,nomevacina,nomeanimal,fabricacao,id_veterinario,nomeveterinario,vencimento,datavacinacao,revacinacao,obs) VALUES (?,?,?,?,?,?,?,?,?,?);";
        const values = [vacina.iduser,vacina.nomeVacina,vacina.nomeAnimais,vacina.fabricacao ,1,vacina.veterinario,vacina.vencimento,vacina.datavacinacao,vacina.revacinacao,vacina.obs];

        const [rows] = await dataB.query(sql,values);
        /* await dataB.end(); */

        return rows;

    } catch (error) {
        console.log(error)
    }

}
