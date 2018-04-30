import {Buffer} from 'buffer';
import cryptoDecrypt from 'native-crypto/decrypt';
import createKey from './createKey';
import {TKey, TDoc, TEncryptedDoc} from './types';

export default async function decrypt(key: string | TKey, encryptedDoc: TEncryptedDoc) : Promise<TDoc> {
    const {salt, nonce, tag, data} = encryptedDoc;
    if (typeof key === 'string') {
        key = await createKey(key, salt);
    }
    const buf = await cryptoDecrypt(
        key.value,
        Buffer.from(nonce, 'base64'),
        Buffer.concat([
            Buffer.from(data, 'base64'),
            Buffer.from(tag, 'base64')
        ])
    );
    return JSON.parse(buf.toString());
}
