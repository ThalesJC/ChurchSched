"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = __importDefault(require("../Controller/LoginController"));
const router = (0, express_1.Router)();
const loginController = new LoginController_1.default();
// router.post('/login', loginController.login);
router.get('/', loginController.teste);
exports.default = router;
