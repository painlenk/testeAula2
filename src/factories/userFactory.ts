import { IRequestUser } from "../types/interfaces/requestUser";

export const createUserFactory = (requestUser: IRequestUser): IRequestUser => {

    const user = {
        name: requestUser.name,
        email: requestUser.email,
        age: requestUser.age,
        password: requestUser.password
    }

    return user
}