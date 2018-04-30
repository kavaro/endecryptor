import cryptoEncrypt from 'native-crypto/encrypt';
import randomBytes from 'randombytes';
import createKey from './createKey';
import {TKey, TDoc, TEncryptedDoc} from './types';

export default async function encrypt(key: string | TKey, doc: TDoc) : Promise<TEncryptedDoc> {
    if (typeof key === 'string') {
        key = await createKey(key);
    }
    const nonce = randomBytes(12);
    const encryption = await cryptoEncrypt(key.value, nonce, JSON.stringify(doc));
    const tag = encryption.slice(-16).toString('base64');
    const data = encryption.slice(0, -16).toString('base64');
    return {salt: key.salt, nonce: nonce.toString('base64'), tag, data};
}


