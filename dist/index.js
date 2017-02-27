'use strict';

let koa = require('koa');
let version = require('koa/package').version;

module.exports = {
    'framework:koa': ['factory', function (args, config, logger, helper) {
        let app, log, port, middlewares;

        app = koa();
        port = config.koa.port;
        log = logger.create('koa');
        middlewares = config.koa.middlewares || [];

        middlewares.map(item => app.use(item));
        app.listen(port);
        log.info(`Koa ${version} server started at http://0.0.0.0:${port}/`);
    }]
};