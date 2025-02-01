"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserFactory = void 0;
const createUserFactory = (requestUser) => {
    const user = {
        name: requestUser.name,
        email: requestUser.email,
        age: requestUser.age,
        password: requestUser.password
    };
    return user;
};
exports.createUserFactory = createUserFactory;
//# sourceMappingURL=userFactory.js.map