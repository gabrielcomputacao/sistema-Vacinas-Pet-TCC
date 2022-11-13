const express = require("express");

const router = express.Router();
/* permite distribuir as rotas em
arquivos diferentes para madnar para 
qualquer lugar da aplicação
*/

const petService = require("../service/petService")
const insertService = require("../service/insertService")
const checkService = require("../service/checkLoginService")

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

module.exports = router;
