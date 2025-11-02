// Define the class in a file named, for example, 'Person.js'
const Users = require('../../model/User');
class AccountVerify {
  constructor(otp) {
    this.otp = otp;
  }

  greet() {
    //return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  async verifyUser(){
    return await Users.findOne({
      where: {otp: this.otp}
    });
  }
}

module.exports = AccountVerify; // Export the class