import {Application, json} from "express"
import {userRouter} from "./routers/userRouter"
import {pictureRouter} from "./routers/pictureRouter"
import cors from 'cors';
const express = require('express')

const app: Application = express()


const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// Then pass these options to cors:
app.use(cors(options));
app.use(json());
app.use("/api/", userRouter);
app.use("/api/", pictureRouter);

app.listen(8090, () => {
  console.log("Connected")
})