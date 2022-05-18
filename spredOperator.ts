(async () => {
    const mysql = require('mysql2');

    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'test',
    });

    const promisePool = pool.promise();

    const [rows] = await promisePool.query("SELECT * FROM pictures");

    console.log({rows})
})()