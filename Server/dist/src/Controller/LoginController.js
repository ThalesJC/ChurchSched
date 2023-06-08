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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginService_1 = __importDefault(require("../Service/LoginService"));
const service = new LoginService_1.default();
class LoginController {
    constructor() {
        // public login = async (req: Request, res: Response) => {
        //   const { name, phoneNumber } = req.body;
        //   const response = await service.login({ name, phoneNumber });
        //   console.log(response);
        //   res.status(200).json(response);
        // };
        this.teste = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // const response = await service.teste();
            const response = "teste";
            console.log("camada CONTROLLER", response);
            res.status(200).send('teste');
        });
    }
}
exports.default = LoginController;
;
