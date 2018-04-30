import { TKey, TDoc, TEncryptedDoc } from './types';
export default function decrypt(key: string | TKey, encryptedDoc: TEncryptedDoc): Promise<TDoc>;
