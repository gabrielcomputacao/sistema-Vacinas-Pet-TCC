const database = require("../infra/database/poolDatabase");

exports.insertAnimal = async function (animal) {
  try {
    database.connect();
    const sql =
      "INSERT INTO animal(nome,data_nascimento,sexo,pelagem,alergia,doenca,obs,peso,tamanho,raca,especie,nome_proprietario,cod_usuario) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)";
    const values = [
      animal.nome,
      animal.nascimento,
      animal.sexo,
      animal.pelagem,
      animal.alergia,
      animal.doenca,
      animal.obs,
      animal.peso,
      animal.tamanho,
      animal.raca,
      animal.especie,
      animal.proprietario,
      animal.coduser,
    ];

    const result = await database.query(sql, values);

    return result;

    
  } catch (error) {
    console.log(error);
  }
};
