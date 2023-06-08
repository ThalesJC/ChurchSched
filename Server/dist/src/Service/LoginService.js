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
const user_1 = __importDefault(require("../../models/user"));
class LoginService {
    constructor() {
        // public login = async ({ name, phoneNumber }: LoginData) => {
        //   if (!name || !phoneNumber) {
        //     throw new Error("Params missing");
        //   }
        //   const user = await User.findOne({ where: { name } });
        //   if (!user) {
        //     throw new Error("User not found");
        //   }
        //   return user;
        // };
        this.teste = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield user_1.default.findAll();
            console.log("camada SERVICE", users);
            return users;
        });
    }
}
exports.default = LoginService;
;
