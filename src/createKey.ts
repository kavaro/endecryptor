import {Buffer} from 'buffer';
import pbkdf2 from 'native-crypto/pbkdf2';
import randomBytes from 'randombytes';
import {TKey} from './types';

export default async function createKey(password: string, salt = randomBytes(16).toString('hex')): Promise<TKey> {
    const value = await pbkdf2(password, new Buffer(salt, 'hex'), 1000, 256 / 8, 'sha256');
    return {value, salt};
}

