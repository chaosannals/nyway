const fs = require('fs');
const path = require('path');
const mysql = require('mysql');

module.exports = {
    /**
     * 连接数据库。
     * 
     */
    connect() {
        const connection = mysql.createConnection({
            host: '127.0.0.1',
            port: 3306,
            user: 'developer',
            password: 'developer',
            database: 'nyway',
            charset: 'UTF8MB4_UNICODE_CI',
            debug: true,
        });
        connection.connect();
        return connection;
    },

    /**
     * 执行 MySQL 命令。
     * 
     */
    execute() {
        let connection = this.connect();
        for (let command of arguments) {
            connection.query(command);
        }
        connection.end();
    },

    /**
     * 执行文件。
     * 
     */
    loadFile() {
        let connection = this.connect();
        for (let path of arguments) {
            let data = fs.readFileSync(path, 'utf8');
            connection.query(data);
        }
        connection.end();
    },

    /**
     * 执行文件夹。
     * 
     */
    loadFolder(directory, recurrence) {
        let all = [];
        for (let name of fs.readdirSync(directory)) {
            let filepath = path.join(directory, name);
            let stats = fs.statSync(filepath);
            if (recurrence && stats.isDirectory()) {
                this.loadFolder(filepath, true);
            } else if(stats.isFile()) {
                let extname = path.extname(name);
                if ('.sql' != extname) continue;
                all.push(filepath);
            }
        }
        this.loadFile(...all);
    }
};