const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const secretKey = crypto.randomBytes(32); // 32 bytes for AES-256
const iv = crypto.randomBytes(16); 
module.exports = {
    encrypt: function(text){
        const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return { iv: iv.toString('hex'), encryptedData: encrypted };
    },
    decrypt: function(encryptedObject) {
        const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), Buffer.from(encryptedObject.iv, 'hex'));
        let decrypted = decipher.update(encryptedObject.encryptedData, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    },
    generateRandomNumber: (length) =>
    [...Array(length).keys()].reduce(
        previousValue =>
        previousValue + String(Math.floor(Math.random() * 10) % 10),
    ),
    generateOtp: function(length){
        return Math.floor(1000 + Math.random() * length);
    },
    helper2: function(){

    }
}