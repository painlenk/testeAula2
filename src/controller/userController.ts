import { createUserFactory } from "../factories/userFactory"
import { userService, UserService } from "../services/userService"

class UserController {

    constructor(private readonly userService: UserService) { }

    public createUser = async (body: any) => {
        const { name, age, email, password } = body
        const user = createUserFactory({ name, age, email, password })
        try {
            const data = await this.userService.createUserDb(user)
            return data
        } catch (e) {
            return e
        }

    }


}
const userController = new UserController(userService)
export { UserController, userController }

