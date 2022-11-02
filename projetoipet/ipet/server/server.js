const express = require("express")
const app = express()

app.use('/', require('./route/petRoute'))
/* funcao de roteamento para que todas as
rotas construidas no petroute sejam usadas
aqui no server */


app.listen("3005")