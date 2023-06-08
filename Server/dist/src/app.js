"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const errorMiddleware_1 = __importDefault(require("./Middlewares/errorMiddleware"));
const LoginRoute_1 = __importDefault(require("./Routes/LoginRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/login', LoginRoute_1.default);
app.get('/', (_req, res) => {
    return res.status(http_status_codes_1.StatusCodes.OK).send('Hello World!');
});
app.use(errorMiddleware_1.default);
exports.default = app;
