module.exports = {
    publicPath: '/',
    outputDir: '../backend/view',
    devServer: {
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1',
                ws: true,
                changeOrigin: false,
            },
            '/captcha': {
                target: 'http://127.0.0.1',
                ws: true,
                changeOrigin: false,
            },
        },
    },
};