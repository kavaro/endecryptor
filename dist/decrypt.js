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
const buffer_1 = require("buffer");
const decrypt_1 = __importDefault(require("native-crypto/decrypt"));
const createKey_1 = __importDefault(require("./createKey"));
function decrypt(key, encryptedDoc) {
    return __awaiter(this, void 0, void 0, function* () {
        const { salt, nonce, tag, data } = encryptedDoc;
        if (typeof key === 'string') {
            key = yield createKey_1.default(key, salt);
        }
        const buf = yield decrypt_1.default(key.value, buffer_1.Buffer.from(nonce, 'base64'), buffer_1.Buffer.concat([
            buffer_1.Buffer.from(data, 'base64'),
            buffer_1.Buffer.from(tag, 'base64')
        ]));
        return JSON.parse(buf.toString());
    });
}
exports.default = decrypt;
//# sourceMappingURL=decrypt.js.map