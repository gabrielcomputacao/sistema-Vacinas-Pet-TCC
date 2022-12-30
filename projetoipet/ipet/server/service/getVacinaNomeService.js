
const vacinaNome = require("../data/getVacinaNome")

exports.getVacinaNomeService = async function (){
    return await vacinaNome.getVacinaNome()
}
