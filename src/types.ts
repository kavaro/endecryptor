export interface TKey {
    value: Buffer,
    salt: string
}

export interface TDoc {
    [key: string]: any
}

export interface TEncryptedDoc {
    salt: string,
    nonce: string,
    tag: string,
    data: string
}