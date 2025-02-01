import { createUserFactory } from "../factories/userFactory"
import { IRequestUser } from "../types/interfaces/requestUser"

export class UserController {

    public createUser = async (body: any) => {
        const { name, age, email, password } = body
        const user = createUserFactory({ name, age, email, password })

        try {
            const data = await this.mockCallToDB(user, true)
            return data
        } catch (e) {
            return e
        }

    }

    private mockCallToDB(user: IRequestUser, fail = false): Promise<IRequestUser> {

        return new Promise((resolve, reject) => {
            if (fail) {
                reject('user not found')
                return
            }
            setTimeout(() => {
                resolve(user)
                return
            }, 500)
        })
    }

}


