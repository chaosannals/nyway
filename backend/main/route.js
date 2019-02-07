const Router = require('koa-router');
const svgCaptcha = require('svg-captcha');
const sql = require('./mysql');

const router = new Router();
router.get('/captcha.svg', (context, next) => {
    captcha = svgCaptcha.create();
    context.type = 'image/svg+xml';
    context.body = captcha.data;
    context.session.captcha = captcha.text;
    return next();
});

router.post('/api/user/login.json', async (context, next) => {
    let data = context.request.body;
    let rows = await sql.query(`SELECT * FROM nw_user WHERE account=? AND cipher=?`, [
        data.username,
        sql.raw(`UNHEX(SHA2('${data.password}', 256))`),
    ]);
    if (0 < rows.length) {
        let info = rows[0];
        context.body = {
            code: 0,
            user: {
                id: info.id,
                nickname: info.nickname,
                createtime: info.createtime,
            },
        };
        context.session.user = {
            id: info.id,
        };
    } else {
        context.body = {
            code: -1,
        };
    }
    return next();
});

module.exports = application => {
    return router.routes();
};
