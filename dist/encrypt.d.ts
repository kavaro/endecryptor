import { TKey, TDoc, TEncryptedDoc } from './types';
export default function encrypt(key: string | TKey, doc: TDoc): Promise<TEncryptedDoc>;
