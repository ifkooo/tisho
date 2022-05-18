import {Request, Response} from "express";
import {Picture} from "../types/picture"
import {pictureModel} from "../models/pictureModel"
import {pictureDataInput} from "../types/pictureDataInput"

export class pictureController {

    async getPictures(req: Request, res: Response) {
        let pictures: Picture[] = await new pictureModel().getAllPictures();
        res.send(pictures)
    }

    async getPictureById (req: Request, res: Response) {
        let pic_id = Number(req.params.id);
        let picture: Picture[] = await new pictureModel().getPicById(pic_id);

        if (!picture) {
            return res.send({
                status: 404,
                message: "Picture does not exist"
            })
        }
        res.send(picture)
    }

    async createPicture (req: Request, res: Response) {
        let pictureData: pictureDataInput = req.body;
        if (!pictureData.caption) {
            return res.send({
                status: 404,
                message: "Caption not provided"
            })
        }
        if (!pictureData.img) {
            return res.send({
                status: 404,
                message: "Please select image"
            })
        }
        const PictureModel = new pictureModel();
        await PictureModel.createPicture(pictureData)
        res.send({
            status: 200,
            message: 'Picture posted'
        })
    }

    async updatePicture (req: Request, res: Response) {
        let pic_id = Number(req.params.id);
        let updatePictureData: pictureDataInput = req.body;
        const UserModel = new pictureModel();
        await UserModel.updatePicture(pic_id, updatePictureData);
        res.send({
            status: 200,
            message: `Picture with ID ${pic_id} updated`
        })
    }

    async deletePicture (req: Request, res: Response) {
        let pic_id = Number(req.params.id);
        const PictureModel = new pictureModel();
        await PictureModel.deletePicture(pic_id)
        res.send({
            status: 200,
            message: `Picture with ID ${pic_id} was deleted`
        })
    }
}