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
const endId = require("../service/getEnderecoService")

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
        const idend = req.body;

        const resIdEnd = await endId.getIdEnd(idend);

        res.json(resIdEnd);
})

module.exports = router;
