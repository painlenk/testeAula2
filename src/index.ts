import { userController, UserController } from "./controller/userController"

const batata = async () => {


    const teste1 = await userController.createUser({ name: "leo", age: 27, email: "teste@teste.com", password: "123" })
    console.log(teste1)
}

batata()
