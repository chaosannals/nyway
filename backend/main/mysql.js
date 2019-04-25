const mysql = require('mysql');
const conf = require('../conf/database');

let pool = mysql.createPool(conf);

module.exports = {
    raw: mysql.raw,
    /**
     * 
     */
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