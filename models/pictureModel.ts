import {Picture} from "../types/picture"
import {pictureDataInput} from "../types/pictureDataInput"
const mysql = require('mysql2');

export class pictureModel {
    private conn2;  //connection to database

    constructor() {
        const pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            database: 'test',
        });
        this.conn2 = pool.promise();
    }

    async getAllPictures(): Promise<Picture[]> {
        const [rows] = await this.conn2.query("SELECT * FROM pictures");
        return rows;
    }

    async getPicById(pic_id: number): Promise<Picture[]> {
        const [rows] = await this.conn2.query("SELECT * FROM pictures WHERE pic_id = ?", [pic_id]);
        return rows;
    }

    async createPicture(userDataInput: pictureDataInput): Promise<boolean> {
        const insertDataObj = [
            userDataInput.caption,
            userDataInput.img,
        ]
        await this.conn2.execute("INSERT INTO pictures (caption, img) VALUES (?, ?)", insertDataObj)
        return true;
    }

    async updatePicture(pic_id: number, updatePictureData: pictureDataInput): Promise<boolean> {
        const updatePicturerDataArr = Object.entries(updatePictureData);
        let setState = "";
        let prepStateData = [];
        for (let i = 0; i < updatePicturerDataArr.length; i++) {
            setState += `${updatePicturerDataArr[i][0]} = ?`
            setState += (i + 1 !== updatePicturerDataArr.length) ? ", " : " ";
            prepStateData.push(updatePicturerDataArr[i][1]);
        }
        prepStateData.push(pic_id);
        await this.conn2.execute(`UPDATE pictures SET ${setState} WHERE pic_id = ?`, prepStateData);
        return true;
    }

    async deletePicture(pic_id: number): Promise<boolean> {
        await this.conn2.execute("DELETE FROM pictures WHERE pic_id = ?", [pic_id])
        return true;
    }
}