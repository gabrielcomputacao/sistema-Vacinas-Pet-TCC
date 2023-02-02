const database = require("../infra/database/databaseMysql");

exports.insertAnimal = async function (animal) {
  try {
    const dataB = await database();
    const sql =
      "INSERT INTO animal(nome,data_nascimento,sexo,pelagem,alergia,doenca,obs,peso,tamanho,raca,especie,nome_proprietario,cod_usuario) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
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

    const [rows] = await dataB.query(sql, values);
    /* await dataB.end(); */
    return rows;

    
  } catch (error) {
    console.log(error);
  }
};
