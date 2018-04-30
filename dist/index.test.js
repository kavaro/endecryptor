"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('endecrypt', () => {
    describe('encrypt/decrypt with password string', () => {
        it('should encrypt/decrypt', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const doc = { name: 'Karl' };
                const encrypted = yield index_1.encrypt('password', doc);
                expect(encrypted).not.toEqual(doc);
                expect(Object.keys(encrypted)).toEqual(['salt', 'nonce', 'tag', 'data']);
                const decrypted = yield index_1.decrypt('password', encrypted);
                expect(decrypted).toEqual(doc);
                try {
                    yield index_1.decrypt('wrong', encrypted);
                    expect(false).toBe(true);
                }
                catch (err) {
                }
            });
        });
    });
    describe('encrypt/decrypt with key', () => {
        it('should encrypt/decrypt', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const key = yield index_1.createKey('password');
                const doc = { name: 'Karl' };
                const encrypted = yield index_1.encrypt(key, doc);
                expect(encrypted).not.toEqual(doc);
                expect(Object.keys(encrypted)).toEqual(['salt', 'nonce', 'tag', 'data']);
                const decrypted = yield index_1.decrypt(key, encrypted);
                expect(decrypted).toEqual(doc);
                try {
                    yield index_1.decrypt(yield index_1.createKey('wrong'), encrypted);
                    expect(false).toBe(true);
                }
                catch (err) {
                }
            });
        });
    });
});
//# sourceMappingURL=index.test.js.map