

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
const key = generateRandomNumber(1, 10); // 'clavesecreta'

function vernamEncrypt(message, key) {
    const encrypted = [];
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i) ^ key.charCodeAt(i);
      encrypted.push(charCode);
    }
    return Buffer.from(encrypted).toString('hex');
  }
  
function vernamDecrypt(encrypted, key) {
    const decrypted = [];
    const encryptedBytes = Buffer.from(encrypted, 'hex');
    for (let i = 0; i < encryptedBytes.length; i++) {
      const charCode = encryptedBytes[i] ^ key.charCodeAt(i);
      decrypted.push(String.fromCharCode(charCode));
    }
    return decrypted.join('');
  }

  
  const encryptedMessage = vernamEncrypt(message, key);
  console.log('Mensaje cifrado:', encryptedMessage);
  
  const decryptedMessage = vernamDecrypt(encryptedMessage, key);
  console.log('Mensaje descifrado:', decryptedMessage);
  