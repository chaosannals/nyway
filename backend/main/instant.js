const route = require('koa-route');

module.exports = application => {
    return route.all('/instant', (context) => {
        context.websocket.on('message', message => {
            context.websocket.send(message);
        });
    });
};