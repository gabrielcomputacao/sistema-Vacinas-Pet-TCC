
const service = require("../data/InsertEndereco")

exports.insertEndereco = function(user){
    return service.InsertEndereco(user)
}