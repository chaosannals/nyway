const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const websocket = require('koa-websocket');
const session = require('./session');
const route = require('./route');
const instant = require('./instant');

const application = websocket(new Koa());

application.use(serve(path.join(__dirname, '../view')));
application.use(session(application));
application.use(route(application));
application.ws.use(instant(application));

application.listen(80);
