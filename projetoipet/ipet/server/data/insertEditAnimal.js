
const database = require("../infra/database/databaseMysql")

exports.insertEditAnimal = async function(animal){

    try {

        const dataB = await database();
        const sql =" UPDATE animal SET nome=?,data_nascimento= ?,sexo= ? , pelagem= ?,alergia= ?,doenca= ?,obs= ?,peso= ?,tamanho= ?,raca= ?,especie= ?,nome_proprietario= ?  WHERE id_animal = ?";
        const values= [animal.nome,animal.data_nascimento,animal.sexo,animal.pelagem,animal.alergia,animal.doenca,animal.obs,parseFloat(animal.peso),parseFloat( animal.tamanho),animal.raca,animal.especie,animal.nome_proprietario,animal.id_animal];
        const [rows] = await dataB.query(sql,values);
       /*  await dataB.end(); */

        return rows;

    } catch (error) {
        console.log(error)
    }



}





