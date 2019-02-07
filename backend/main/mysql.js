const mysql = require('mysql');

let pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'developer',
    password: 'developer',
    database: 'nyway',
    charset: 'UTF8MB4_UNICODE_CI',
    debug: false,
});

module.exports = {
    raw: mysql.raw,
    query: (sql, values) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((error, connection) => {
                if (error) {
                    reject(error);
                } else {
                    connection.query(sql, values, (error, rows) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(rows);
                        }
                    });
                    connection.release();
                }
            });
        });
    },
};