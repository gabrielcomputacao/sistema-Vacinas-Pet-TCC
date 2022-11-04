const service = require('../data/insertUser')

exports.insertUser = function(user){
    return service.insertUsers(user);
}