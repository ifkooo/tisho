"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userRouter_1 = require("./routers/userRouter");
var pictureRouter_1 = require("./routers/pictureRouter");
var express = require('express');
global.__basedir = __dirname;
//////////////////////////
var cors = require("cors");
var corsOptions = {
    origin: "http://localhost:8081"
};
var initRoutes = require("./routes");
//////////////////////////
var app = express();
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
app.use(cors(corsOptions));
app.use((0, express_1.json)());
app.use("/api/", userRouter_1.userRouter);
app.use("/api/", pictureRouter_1.pictureRouter);
app.listen(8090, function () {
    console.log("Connected");
});
