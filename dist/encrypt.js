"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const encrypt_1 = __importDefault(require("native-crypto/encrypt"));
const randombytes_1 = __importDefault(require("randombytes"));
const createKey_1 = __importDefault(require("./createKey"));
function encrypt(key, doc) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof key === 'string') {
            key = yield createKey_1.default(key);
        }
        const nonce = randombytes_1.default(12);
        const encryption = yield encrypt_1.default(key.value, nonce, JSON.stringify(doc));
        const tag = encryption.slice(-16).toString('base64');
        const data = encryption.slice(0, -16).toString('base64');
        return { salt: key.salt, nonce: nonce.toString('base64'), tag, data };
    });
}
exports.default = encrypt;
//# sourceMappingURL=encrypt.js.map