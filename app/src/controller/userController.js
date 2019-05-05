"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    static setSession(ctx) {
        let session = ctx.session;
        let test = {
            name: 'yanle',
            age: 30
        };
        session.setSession = test;
        return ctx.body = test;
    }
    static getSession(ctx) {
        let session = ctx.session;
        return ctx.body = session.setSession;
    }
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map