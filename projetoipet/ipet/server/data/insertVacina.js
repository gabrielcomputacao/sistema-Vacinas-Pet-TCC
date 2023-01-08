const database = require("../infra/database/poolDatabase");



exports.insertVacina = async function(vacina){

    try {
        
        const dataB = await database();
        const sql = "INSERT INTO aplicacao(iduser,nomevacina,nomeanimal,fabricacao,id_veterinario,nomeveterinario,vencimento,datavacinacao,revacinacao,obs) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);";
        const values = [vacina.iduser,vacina.nomeVacina,vacina.nomeAnimais,vacina.fabricacao ,1,vacina.veterinario,vacina.vencimento,vacina.datavacinacao,vacina.revacinacao,vacina.obs];

        return await dataB.query(sql,values);

    } catch (error) {
        console.log(error)
    }

}
