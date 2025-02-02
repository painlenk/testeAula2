import { IRequestUser } from "../types/interfaces/requestUser"

class UserService {

    public createUserDb = async (user: IRequestUser) => {
        try {
            const userDb = await this.mockCallToDB(user)
            return userDb
        } catch (e) {
            console.log(e)
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

const userService = new UserService()
export { UserService, userService }