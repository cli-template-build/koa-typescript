"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const router = new Router();
const index_1 = require("./index");
router.use('/api', index_1.userRouter.routes(), index_1.userRouter.allowedMethods());
exports.default = router;
//# sourceMappingURL=routing.js.map