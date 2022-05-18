import {Request, Response} from "express";
import {User} from "../types/user";
import {loginQueryParams} from "../types/login";
import {userModel} from "../models/userModel";
import {userDataInput} from "../types/userDataInput";
import {userUpdatedData} from "../types/updatedUserData";

export class userController {

    async getUsers(req: Request, res: Response) {
        let users: User[] = await new userModel().getAll();
        res.send(users)
    }

    async getUserById (req: Request, res: Response) {
        let id = Number(req.params.id);
        let user: User[] = await new userModel().getUserById(id);

        if (!user) {
            return res.send({
                status: 404,
                message: "User does not exist"
            })
        }
        res.send(user)
    }

    async createUser (req: Request, res: Response) {
        let userData: userDataInput = req.body;
        if (!userData.username) {
            return res.send({
                status: 404,
                message: "Username not provided"
            })
        }
        if (!userData.password) {
            return res.send({
                status: 404,
                message: "Password not provided"
            })
        }
        const UserModel = new userModel();
        await UserModel.createUser(userData)
        res.send({
            status: 200,
            message: 'User created'
        })
    }

    async updateUser (req: Request, res: Response) {
        let id = Number(req.params.id);
        let updateUserData: userUpdatedData = req.body;
        const UserModel = new userModel();
        await UserModel.updateUser(id, updateUserData);
        res.send({
            status: 200,
            message: `User with ID ${id} updated`
        })
    }

    async userDelete (req: Request, res: Response) {
        let id = Number(req.params.id);
        const UserModel = new userModel();
        await UserModel.deleteUser(id)
        res.send({
            status: 200,
            message: `User with ID ${id} was deleted`
        })
    }

    login (req: Request, res: Response) {
        const queryParams: loginQueryParams = req.query;
        if (!queryParams.username || !queryParams.password) {
            return res.send({
                status: 400,
                message: "Wrong!"
            })
        }
        res.send({
            status: 300,
            message: "Login successful"
        })
    }
}