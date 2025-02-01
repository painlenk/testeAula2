"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userFactory_1 = require("../factories/userFactory");
class UserController {
    createUser = async (body) => {
        const { name, age, email, password } = body;
        const user = (0, userFactory_1.createUserFactory)({ name, age, email, password });
        try {
            const data = await this.mockCallToDB(user, true);
            return data;
        }
        catch (e) {
            return e;
        }
    };
    mockCallToDB(user, fail = false) {
        return new Promise((resolve, reject) => {
            if (fail) {
                reject('user not found');
                return;
            }
            setTimeout(() => {
                resolve(user);
                return;
            }, 500);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map