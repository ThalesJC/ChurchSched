"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_js_1 = __importDefault(require("./index.js"));
class User extends sequelize_1.Model {
}
;
User.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    phoneNum: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    role: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.STRING,
        allowNull: true,
    }
}, {
    sequelize: index_js_1.default,
    modelName: 'users',
    timestamps: false,
});
exports.default = User;
