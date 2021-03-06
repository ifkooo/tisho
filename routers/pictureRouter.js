"use strict";
exports.__esModule = true;
exports.pictureRouter = void 0;
var express_1 = require("express");
var pictureController_1 = require("../controllers/pictureController");
exports.pictureRouter = (0, express_1.Router)();
var PictureController = new pictureController_1.pictureController();
exports.pictureRouter.get("/picture/:id", PictureController.getPictureById);
exports.pictureRouter.get("/pictures", PictureController.getPictures);
exports.pictureRouter.post("/picture", PictureController.createPicture);
exports.pictureRouter.put("/picture/:id", PictureController.updatePicture);
exports.pictureRouter["delete"]("/picture/:id", PictureController.deletePicture);
