import {Router} from "express";
import {userController} from "../controllers/userController";

export const userRouter = Router();

const UserController = new userController();

userRouter.get("/user/:id", UserController.getUserById)
userRouter.get("/users", UserController.getUsers)
userRouter.post("/login", UserController.login)
userRouter.post("/user", UserController.createUser)
userRouter.put("/user/:id", UserController.updateUser)
userRouter.delete("/user/:id", UserController.userDelete)