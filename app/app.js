"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const views = require("koa-views");
const json = require("koa-json");
const onError = require("koa-onerror");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logs-middleware");
const session = require("koa-generic-session");
const redisStore = require("koa-redis");
const config_1 = require("./config");
const path = require("path");
const routing_1 = require("./src/routes/routing");
const MAX_AGE = 12 * 60 * 60 * 1000;
const dirName = __dirname;
const app = new Koa();
onError(app);
const redisConfig = {
    port: config_1.default.redis.PORT,
    host: config_1.default.redis.HOST,
    db: config_1.default.redis.DB,
    ttl: 1000 * 60 * 60,
};
app.keys = ['keys', 'keyskeys'];
app.use(session({
    store: redisStore(redisConfig)
}));
app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger({
    defaultPath: path.resolve(dirName, 'logs'),
    applicationName: 'app'
}));
app.use(require('koa-static')(dirName + '/views'));
app.use(views(dirName + '/views', {
    extension: 'html'
}));
app.use(routing_1.default.routes()).use(routing_1.default.allowedMethods({
    throw: true
}));
exports.default = app;
//# sourceMappingURL=app.js.map