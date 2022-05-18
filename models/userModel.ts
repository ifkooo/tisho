
import {User} from "../types/user";
import {userDataInput} from "../types/userDataInput";
import {userUpdatedData} from "../types/updatedUserData"
const mysql = require('mysql2');

export class userModel {

    private conn;  //connection to database

    constructor() {
        const pool = mysql.createPool({
            host:'127.0.0.1',
            user: 'root',
            database: 'test',
        });

        this.conn = pool.promise();
    
    }

    async getAll(): Promise<User[]> {
        const [rows] = await this.conn.query("SELECT * FROM users");
        return rows;
    }

    async getUserById(id: number): Promise<User[]> {
        const [rows] = await this.conn.query("SELECT * FROM users WHERE id = ?", [id]);
        return rows;
    }

    async createUser(userDataInput: userDataInput): Promise<boolean> {
        const insertDataObj = [
            userDataInput.username,
            userDataInput.password,
            (userDataInput.email) ? userDataInput.email : null,
            (userDataInput.first_name) ? userDataInput.first_name : null,
            (userDataInput.last_name) ? userDataInput.last_name : null,
            (userDataInput.age) ? userDataInput.age : null
        ]
        await this.conn.execute("INSERT INTO users (username, password, email, first_name, last_name, age)" + 
            "VALUES (?, ?, ?, ?, ?, ?)", insertDataObj)
        return true;
    }

    async updateUser(id: number, updateUserData: userUpdatedData): Promise<boolean> {
        const updateUserDataArr = Object.entries(updateUserData);             //konvektira obekta v masiv
        let setState = "";
        let prepStateData = [];
        for (let i = 0; i < updateUserDataArr.length; i++) {
            setState += `${updateUserDataArr[i][0]} = ?`
            setState += (i + 1 !== updateUserDataArr.length) ? ", " : " ";
            prepStateData.push(updateUserDataArr[i][1]);
        }
        prepStateData.push(id);
        await this.conn.execute(`UPDATE users SET ${setState} WHERE id = ?`, prepStateData);
        return true;
    }

    async deleteUser(id: number): Promise<boolean> {
        await this.conn.execute("DELETE FROM users WHERE id = ?", [id])
        return true;
    }
}