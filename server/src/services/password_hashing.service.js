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
exports.verifyPassword = exports.hashPassword = void 0;
const argon2_1 = __importDefault(require("argon2"));
function hashPassword(pin) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hash = yield argon2_1.default.hash(pin);
            return hash;
        }
        catch (err) {
            // throw err;
            return null;
        }
    });
}
exports.hashPassword = hashPassword;
function verifyPassword(dbPIN, reqPIN) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const verify = yield argon2_1.default.verify(dbPIN, reqPIN);
            return verify;
        }
        catch (e) {
            // console.error("Argon verify: ", e);
            return false;
        }
    });
}
exports.verifyPassword = verifyPassword;
