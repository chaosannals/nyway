const fs = require('fs');
const path = require('path');
const sql = require('./util/sql');

let commands = [];

for (let name of fs.readdirSync('./asset/table')) {
    let extname = path.extname(name);
    let table = name.substring(0, name.length - extname.length);
    let command = `DROP TABLE IF EXISTS ${table};`;
    commands.push(command);
}

sql.execute(...commands);
