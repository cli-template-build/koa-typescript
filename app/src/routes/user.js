"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const controller_1 = require("../controller/");
const router = new Router();
router.prefix('/user');
const userRouter = router
    .get('/get-session/', controller_1.UserController.getSession)
    .get('/set-session/', controller_1.UserController.setSession);
exports.default = userRouter;
//# sourceMappingURL=user.js.map