const crypto = require('crypto');

// Function for MD5
const md5hashFunction = (data) => {
  return crypto.createHash('md5').update(data).digest('hex');
};
 
// Function for md5(md5(s) + s + md5(s)) [where + is the string concatenation operator]
const finalHash = (data) => {
  const firstHash = md5hashFunction(data);
  return md5hashFunction(firstHash + data + firstHash);
};

// divided by 32 parts
const hashes = [
  "f894e71e1551d1833a977df952d0cc9d",
    "e44a1f9669fbf97d51309a2c6574d5ea",
    "a746cdeb9ee1a5dfc771d280d33e5672",
    "04c2b7f12a3b18bf3470c7ca102a33b6",
    "e48a0b49e999dc7d88f3e7073040596e",
    "98687c4d1730f3ac2fb2fe4f3e2fba56",
    "b508b77c09d5f5481ddcf2f06d8cea04",
    "fa359350fef4ea37c82b8755e46daefd",
    "8d7a116392c73d2f5111d581f209738d",
    "68232fdc01d03f4ccc6cf9cca6efb00f",
    "1d24ecb45e9944a655e1b43d37818c0f",
    "7d61073d82b0e9dcb006724b5a2b0f96",
    "c91e8022879e2e52cc779263f0d21cff",
    "d5acc468396b4556d357fdb2118f319e",
    "1605aac7e849f7cb2cd9a04322ebb397",
    "73345ff253b3aa09375da98f17812543",
    "ddbdb41fe4d2f1127fef95cc95337de5",
    "fdafe0324b2a6c7cfbd1375098b5499d"
];

// Enumerate all alphabet and extra characters for decryption => "_+.@"
const alphabet = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_+.@'];


const puzzle = {};
for (const x of alphabet) {
  for (const y of alphabet) {
    const hash = finalHash(x + y);
    puzzle[hash] = x + y;
  }
}

// Search for matched hash and join to a single string
const result = hashes.map(hash => puzzle[hash]).join('');
console.log(result);
