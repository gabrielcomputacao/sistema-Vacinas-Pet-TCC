
const database = require("../infra/database/poolDatabase")

exports.insertEditAnimal = async function(animal){

    try {

        const dataB = database();
        const sql =" UPDATE animal SET nome=$1,data_nascimento= $2,sexo= $3 , pelagem= $4,alergia= $5,doenca= $6,obs= $7,peso= $8,tamanho= $9,raca= $10,especie= $11,nome_proprietario= $12  WHERE id_animal = $13";
        const values= [animal.nome,animal.data_nascimento,animal.sexo,animal.pelagem,animal.alergia,animal.doenca,animal.obs,animal.peso,animal.tamanho,animal.raca,animal.especie,animal.nome_proprietario,animal.id_animal];
        const result = await dataB.query(sql,values);


        return result;

    } catch (error) {
        console.log(error)
    }



}





