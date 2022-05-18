"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.pictureController = void 0;
var pictureModel_1 = require("../models/pictureModel");
var pictureController = /** @class */ (function () {
    function pictureController() {
    }
    pictureController.prototype.getPictures = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pictures;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new pictureModel_1.pictureModel().getAllPictures()];
                    case 1:
                        pictures = _a.sent();
                        res.send(pictures);
                        return [2 /*return*/];
                }
            });
        });
    };
    pictureController.prototype.getPictureById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pic_id, picture;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pic_id = Number(req.params.id);
                        return [4 /*yield*/, new pictureModel_1.pictureModel().getPicById(pic_id)];
                    case 1:
                        picture = _a.sent();
                        if (!picture) {
                            return [2 /*return*/, res.send({
                                    status: 404,
                                    message: "Picture does not exist"
                                })];
                        }
                        res.send(picture);
                        return [2 /*return*/];
                }
            });
        });
    };
    pictureController.prototype.createPicture = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pictureData, PictureModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pictureData = req.body;
                        if (!pictureData.caption) {
                            return [2 /*return*/, res.send({
                                    status: 404,
                                    message: "Caption not provided"
                                })];
                        }
                        if (!pictureData.img) {
                            return [2 /*return*/, res.send({
                                    status: 404,
                                    message: "Please select image"
                                })];
                        }
                        PictureModel = new pictureModel_1.pictureModel();
                        return [4 /*yield*/, PictureModel.createPicture(pictureData)];
                    case 1:
                        _a.sent();
                        res.send({
                            status: 200,
                            message: 'Picture posted'
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    pictureController.prototype.updatePicture = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pic_id, updatePictureData, UserModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pic_id = Number(req.params.id);
                        updatePictureData = req.body;
                        UserModel = new pictureModel_1.pictureModel();
                        return [4 /*yield*/, UserModel.updatePicture(pic_id, updatePictureData)];
                    case 1:
                        _a.sent();
                        res.send({
                            status: 200,
                            message: "Picture with ID ".concat(pic_id, " updated")
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    pictureController.prototype.deletePicture = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pic_id, PictureModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pic_id = Number(req.params.id);
                        PictureModel = new pictureModel_1.pictureModel();
                        return [4 /*yield*/, PictureModel.deletePicture(pic_id)];
                    case 1:
                        _a.sent();
                        res.send({
                            status: 200,
                            message: "Picture with ID ".concat(pic_id, " was deleted")
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return pictureController;
}());
exports.pictureController = pictureController;
