class VigenereCipheringMachine {
  constructor(nothing) {
    this.nothing = nothing === false ? false : true; 
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Error");
    }

    message = message.toLowerCase();
    key = key.toLowerCase()
    let k = 0;

    let res = message.split("").map(char => {
      if (char.charCodeAt() > 96 && char.charCodeAt() < 123) {
        return String.fromCharCode((char.charCodeAt() + 
        key[k++ % key.length].charCodeAt() - 194) % 26 + 97);
      }

      return char;
    });

    return this.nothing === false ? res.reverse().join("").toUpperCase() : 
    res.join("").toUpperCase();
  }    

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Error");
    }

    encryptedMessage = encryptedMessage.toLowerCase();
    key = key.toLowerCase();
    let k = 0;

    let res = encryptedMessage.split("").map(char => {
      if (char.charCodeAt() > 96 && char.charCodeAt() < 123) {
        return String.fromCharCode((char.charCodeAt() - 
        key[k++ % key.length].charCodeAt() + 26) % 26 + 97);
      }

      return char;
    });
  
    return this.nothing === false ? res.reverse().join("").toUpperCase() : 
    res.join("").toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
