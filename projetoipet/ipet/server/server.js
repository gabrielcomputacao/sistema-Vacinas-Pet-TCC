
const cors = require("cors")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', require('./route/petRoute'))
/* funcao de roteamento para que todas as
rotas construidas no petroute sejam usadas
aqui no server */


app.listen("3005")