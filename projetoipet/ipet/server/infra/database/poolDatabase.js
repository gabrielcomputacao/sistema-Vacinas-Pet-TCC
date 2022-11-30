const poolC =  function connectPool() {
    if (global.connection) {
        return global.connection.connect();
    }

    const {Pool} = require("pg");

    const pool = new Pool({
        user: 'postgres',
        password: 'root',
        host: '127.0.0.1',
        port: 5432,
        database: 'Ipet'
    })
    console.log("conexão feita com sucesso!!")

    global.connection = pool;
    return pool.connect();
}



module.exports = poolC;