


const conn = async function connectPool() {
    if (global.connection && global.connection.state != 'disconected') {
        return global.connection;
    }

    const mysql = require("mysql2/promise")

    const con = mysql.createConnection({
        host: '108.167.168.75',
        user: 'prog1185_root',
        password: 'ipet&123pet',
        database: 'prog1185_ipet',
    })
    console.log("conexão feita com sucesso!!")

    global.connection = con;
    return con;
}

module.exports = conn