const session = require('koa-session');

module.exports = (application) => {
    application.keys = ['asdf adsfadsfasdf'];
    return session({
        key: 'koa:sess',
        maxAge: 86400000,
        autoCommit: true,
        overwrite: true,
        httpOnly: true,
        signed: true,
        rolling: false,
        renew: false,
    }, application);
};