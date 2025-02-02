"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = exports.UserService = void 0;
class UserService {
    createUserDb = async (user) => {
        try {
            const userDb = await this.mockCallToDB(user);
            return userDb;
        }
        catch (e) {
            console.log(e);
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
exports.UserService = UserService;
const userService = new UserService();
exports.userService = userService;
//# sourceMappingURL=userService.js.map