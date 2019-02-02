const Router = require('koa-router');
const svgCaptcha = require('svg-captcha');

const router = new Router();
router.get('/captcha.svg', (context, next) => {
    captcha = svgCaptcha.create();
    context.type = 'image/svg+xml';
    context.body = captcha.data;
    context.session.captcha = captcha.text;
    return next();
});

module.exports = application => {
    return router.routes();
};
