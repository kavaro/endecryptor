# endecryptor

Encrypt/decrypt json using password or key

# Usage

## Encrypt/decrypt with password string

```javascript

import {encrypt, decrypt} from 'endecryptor';

// encrypt/decrypt with password string
const doc = {message: 'Hello world'};
const encryptedDoc = encrypt('my-password', doc);
const decryptedDoc = decrypt('my-password', encryptedDoc);

expect(decryptedDoc).toEqual(doc);

```

## Encrypt/decrypt with key buffer

```javascript

import {encrypt, decrypt, createKey} from 'endecryptor';

// create a key buffer
const key = createKey('my-password');

// encrypt/decrypt with key
const doc = {message: 'Hello world'};
const encryptedDoc = encrypt(key, doc);
const decryptedDoc = decrypt(key, encryptedDoc);

expect(decryptedDoc).toEqual(doc);

```
