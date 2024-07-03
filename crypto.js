const crypto = require('crypto')


// Encryption and Decryption
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); 
const iv = crypto.randomBytes(16); 

// Encryption
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('some data to encrypt', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted); 

// Decryption
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted); 




// Public Key Cryptography
const { generateKeyPairSync, publicEncrypt, privateDecrypt } = crypto;
const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

// Encryption
const data = Buffer.from('some data to encrypt');
const encryptedData = publicEncrypt(publicKey, data);
console.log(encryptedData.toString('hex'));

// Decryption
const decryptedData = privateDecrypt(privateKey, encryptedData);
console.log(decryptedData.toString()); 




