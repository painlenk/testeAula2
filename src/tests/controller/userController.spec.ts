import { describe, expect, test, jest, beforeEach } from '@jest/globals'
import { UserController } from '../../controller/userController'
import { UserService } from '../../services/userService';
import { IRequestUser } from '../../types/interfaces/requestUser';



describe('userController', () => {
    let userService: UserService;
    let userController: UserController;

    jest.mock('../../services/userService');


    beforeEach(() => {
        userService = new UserService();
        userController = new UserController(userService);
    });

    test('mockCallToDB should resolve with user data', async () => {
        const user: IRequestUser = { name: "leo", age: 27, email: "teste@teste.com", password: "123" };
        await expect(userService['mockCallToDB'](user, true)).rejects.toEqual('user not found');
    });

    test('createUser should return user data on success', async () => {
        const user: IRequestUser = { name: "leo", age: 27, email: "teste@teste.com", password: "123" };
        const body = { name: "leo", age: 27, email: "teste@teste.com", password: "123" };
        jest.spyOn(userService, 'createUserDb').mockResolvedValue(user);

        const result = await userController.createUser(body);
        expect(result).toEqual(user);
    });

    test('createUser should return error on failure', async () => {
        const body = { name: "leo", age: 27, email: "teste@teste.com", password: "123" };
        const error = new Error('Failed to create user');
        jest.spyOn(userService, 'createUserDb').mockRejectedValue(error);

        const result = await userController.createUser(body);
        expect(result).toEqual(error);
    });
});