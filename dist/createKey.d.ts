import { TKey } from './types';
export default function createKey(password: string, salt?: string): Promise<TKey>;
