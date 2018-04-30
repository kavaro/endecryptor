import {createKey, encrypt, decrypt} from './index';

describe('endecrypt', () => {
    describe('encrypt/decrypt with password string', () => {
        it('should encrypt/decrypt', async function () {
            const doc = {name: 'Karl'};
            const encrypted = await encrypt('password', doc);
            expect(encrypted).not.toEqual(doc);
            expect(Object.keys(encrypted)).toEqual(['salt', 'nonce', 'tag', 'data']);
            const decrypted = await decrypt('password', encrypted);
            expect(decrypted).toEqual(doc);
            try {
                await decrypt('wrong', encrypted);
                expect(false).toBe(true);
            } catch(err) {
            }
        });
    });
    describe('encrypt/decrypt with key', () => {
        it('should encrypt/decrypt', async function () {
            const key = await createKey('password');
            const doc = {name: 'Karl'};
            const encrypted = await encrypt(key, doc);
            expect(encrypted).not.toEqual(doc);
            expect(Object.keys(encrypted)).toEqual(['salt', 'nonce', 'tag', 'data']);
            const decrypted = await decrypt(key, encrypted);
            expect(decrypted).toEqual(doc);
            try {
                await decrypt(await createKey('wrong'), encrypted);
                expect(false).toBe(true);
            } catch(err) {
            }
        });
    });
});

