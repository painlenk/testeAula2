"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = exports.UserController = void 0;
const userFactory_1 = require("../factories/userFactory");
const userService_1 = require("../services/userService");
class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    createUser = async (body) => {
        const { name, age, email, password } = body;
        const user = (0, userFactory_1.createUserFactory)({ name, age, email, password });
        try {
            const data = await this.userService.createUserDb(user);
            return data;
        }
        catch (e) {
            return e;
        }
    };
}
exports.UserController = UserController;
const userController = new UserController(userService_1.userService);
exports.userController = userController;
//# sourceMappingURL=userController.js.map