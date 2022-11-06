const checkLoginS = require("../data/checkLogin")


exports.checkLoginService = function(user){
    return checkLoginS.checkLogin(user)
}