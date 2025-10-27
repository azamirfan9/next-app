const md5 = require('md5');
const Users = require('../model/User');
const helper = require('../helper/helper');
const JWT = require('../helper/JWT');
const dotenv = require('dotenv'); 
dotenv.config(); 

exports.getUsers = (req, res) => {
    //console.log(md5(helper.generatePassword()));
    const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
    res.status(200).json({ success: true, data: users });
};

exports.createUser = (req, res) => {
    const newUser = req.body.postdata;
    //newUser.password = md5(helper.generatePassword());
    newUser.password = 12345;
    //newUser.otp = helper.generateOtp();
    newUser.otp = '0';
    Users.create(newUser)
    .then((result) => {
        result.otp = "" + helper.generateOtp() + result.id;
        result.save();
        return res.json({
            status: true,
            token: JWT.newAccountToken(result.id),
          	message: "Record created successfully!",
        });
    })
    .catch((error) => {
        console.log(error);
        return res.json({
            status: false,
          	message: "Unable to create a record"
        });
    });
};

exports.otpVerify = (req, res) => {
    console.log(req.headers.authorization);
    const otp = req.body.postdata.otp+req.user.userId;
    console.log(otp);
    // Users.findOne({
    //     where: {otp: otp}
    // })
    // .then(result => {
    //     result.otp = '0';
    //     result.save();
    //     return res.json({
    //         status: true,
    //         response: "Account was verified successfully",
    //     });
    // }).catch((error) => {
    //     console.log(error);
    // })
};