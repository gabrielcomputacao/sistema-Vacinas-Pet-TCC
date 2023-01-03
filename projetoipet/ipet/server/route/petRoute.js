const express = require("express");

const router = express.Router();
/* permite distribuir as rotas em
arquivos diferentes para madnar para 
qualquer lugar da aplicação
*/

const petService = require("../service/petService")
const insertService = require("../service/insertService")
const checkService = require("../service/checkLoginService")
const insertEnd = require("../service/InsertEnderecoService")
const endId = require("../service/getEndService")
const insertProp= require('../service/insertProprietarioService')
const insertPropNomes = require("../service/getProprietarioService")
const insertAnimal = require("../service/insertAnimalService")
const getAnimal = require("../service/getAnimalService")
const deletAnimal = require("../service/deletAnimalService")
const editAnimal = require("../service/insertEditarAnimalService")
const getVacinaNome = require("../service/getVacinaNomeService")
const getNomesAnimais = require("../service/getNomesAnimaisService")
const insertVacina = require("../service/insertVacinaService")

router.get("/cadastrousuario", async function (req, res) {
    const usuarios = await petService.getCadastroPessoa()
    res.json(usuarios)
});
router.post("/cadastrousuario", async function (req, res) {
    const user = req.body;
    const respostaInsert = await insertService.insertUser(user)
    res.json(respostaInsert)
});
router.put("/cadastrousuario/:id", async function (req, resp) {});


router.post("/login" , async function (req,res){
    const user = req.body;

    const check = await checkService.checkLoginService(user)
    res.json(check)
})

router.post("/endereco", async function (req, res){
    const user = req.body;

    const resInsertEndereco = await insertEnd.insertEndereco(user);
    res.json(resInsertEndereco)
})

router.post("/idendereco" , async function(req, res){
        const objEndereco = req.body;

        const resIdEnd = await endId.getEndService(objEndereco);

        res.json(resIdEnd);
})

router.post('/cadproprietario', async function(req , res){
    const objProprietario = req.body;
    const resProp = await insertProp.insertProprietario(objProprietario)

    res.json(resProp)
})

router.get('/getpropnomes/:id' , async function(req,res){
    const numeroUser = req.params.id;

    const nomesProp = await insertPropNomes.getNomesProp(numeroUser)

    res.json(nomesProp)

})

router.post('/cadastroanimais' , async function(req, res){
    const animais = req.body;

    const cadastroAnimal = await insertAnimal.cadAnimalService(animais); 

    res.json(cadastroAnimal);
})

router.get('/getanimais' , async function(req,res,next){

        const animais = await getAnimal.getAnimalService();

        res.json(animais)
})

router.get('/nomeanimais/:id', async function(req,res){
    const idUser = req.params.id

    const nomesAnimais = await getNomesAnimais.getNomeAnimaisService(idUser)

    res.json(nomesAnimais)

})

router.delete("/deletanimal/:id", async function (req, res) {
    const idanimal = req.params.id;
   
    const result = await deletAnimal.deletAnimais(idanimal);

    res.json(result)

});


router.patch("/editanimal" , async function(req, res){
    const animalEdit = req.body;
    const value = await editAnimal.editAnimalService(animalEdit)
    
    res.json(value)
})

router.get("/vacinacao", async function(req,res){
   
    const result = await getVacinaNome.getVacinaNomeService();

    res.json(result)

})

router.post("/cadastrarvacina" , async function(req,res){
    const dadosVacina = req.body;

    const result = await insertVacina.vacinaService(dadosVacina) ;

    res.json(result)

})


module.exports = router;
