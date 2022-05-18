import {Router} from "express";
import {pictureController} from "../controllers/pictureController"

export const pictureRouter = Router();

const PictureController = new pictureController();

pictureRouter.get("/picture/:id", PictureController.getPictureById)
pictureRouter.get("/pictures", PictureController.getPictures)
pictureRouter.post("/picture", PictureController.createPicture)
pictureRouter.put("/picture/:id", PictureController.updatePicture)
pictureRouter.delete("/picture/:id", PictureController.deletePicture)