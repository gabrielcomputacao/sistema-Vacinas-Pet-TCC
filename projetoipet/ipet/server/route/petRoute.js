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
router.delete("/cadastrousuario/:id", async function (req, resp) {});

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



module.exports = router;
