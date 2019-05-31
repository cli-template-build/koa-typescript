interface Session {
  setSession: Test
}

interface Test {
  name: string,
  age: number
}


class UserController {
  static getInfo(ctx) {
    const info = {
      name: 'yanle',
      age: 101
    };
    return ctx.body = info;
  }
}

export default UserController
