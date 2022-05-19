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

let bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// Then pass these options to cors:
app.use(cors(options));
app.use(json());
app.use("/api/", userRouter);
app.use("/api/", pictureRouter);



app.listen(8090, () => {
  console.log("Connected")
})