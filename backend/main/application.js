const path = require('path')
const Koa = require('koa');
const serve = require('koa-static')

const application = new Koa();

application.use(serve(path.join(__dirname, '../view')));

application.listen(80);
