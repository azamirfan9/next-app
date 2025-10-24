const crypto = require('crypto');
module.exports = {
    generatePassword: function(length){
        return crypto.randomInt(100000, 999999);
    },
    generateOtp: function(length){
        return Math.floor(1000 + Math.random() * 9000);
    },
    helper2: function(){

    }
}