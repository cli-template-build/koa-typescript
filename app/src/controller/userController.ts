interface Session {
    setSession: Test
}

interface Test {
    name: string,
    age: number
}


class UserController {
    static setSession(ctx) {
        let session: Session = ctx.session;
        let test: Test = {
            name: 'yanle',
            age: 30
        };
        return ctx.body = test;
    }

    static getSession(ctx) {
        let session: Session = ctx.session;
        return ctx.body = {
            name: 'yanle',
            age: 30
        };
    }
}

export default UserController
