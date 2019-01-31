const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const session = require('koa-session');

const svgCaptcha = require('svg-captcha');

const application = new Koa();

application.use(serve(path.join(__dirname, '../view')));
application.keys = ['asdf adsfadsfasdf'];
application.use(session({
    key: 'koa:sess',
    maxAge: 86400000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
}, application));

let router = new Router();
router.get('/captcha.svg', (context, next) => {
    captcha = svgCaptcha.create();
    context.type = 'image/svg+xml';
    context.body = captcha.data;
    context.session.captcha = captcha.text;
    next();
});

application.use(router.routes());

application.listen(80);
