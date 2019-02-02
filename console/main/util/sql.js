const mysql = require('mysql');

module.exports = {
    connect() {
        const connection = mysql.createConnection({
            host: '',
            port: 3306,
            user: '',
            password: '',
            database: '',
            charset: 'UTF8MB4_UNICODE_CI',
            debug: true,
        });
        connection.connect();
        return connection;
    },
    execute() {
        let connection = this.connect();
        for (let path of arguments) {
            
        }
    }
};