"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("./controller/userController");
const batata = async () => {
    const teste1 = await userController_1.userController.createUser({ name: "leo", age: 27, email: "teste@teste.com", password: "123" });
    console.log(teste1);
};
batata();
//# sourceMappingURL=index.js.map