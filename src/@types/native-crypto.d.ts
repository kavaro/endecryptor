declare module 'native-crypto/pbkdf2' {
    export default function pbkdf2(password: string, salt: Buffer, iteration: number, length: number, algo: string): Buffer;
}

declare module 'native-crypto/encrypt' {
    export default function encrypt(key: Buffer, nonce: Buffer, doc: any) : Buffer;
}

declare module 'native-crypto/decrypt' {
    export default function decrypt(
        key: Buffer,
        nonce: Buffer,
        cipherText: Buffer,
        aad?: Buffer
    ) : {[key: string]: any};
}