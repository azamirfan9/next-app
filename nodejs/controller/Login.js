const Users = require('../model/User');
const JWT = require('../helper/JWT');
exports.signin = (req, res) => {
    Users.findOne({
        where: {email: req.body.postdata.email}
    }).then(result => {
        if(result === null) return res.json({status: false, response: "User not found"})
        if (result.password == req.body.postdata.password) {
            //result.dataValues.token = JWT.generate(result.id);
            return res.json({
                status: true,
                token: JWT.generate(result.id),
                response: "Sucess"
            });
        } else {
            return res.json({
                status: false,
                response: "Password does not match"
            });
        }
    }).catch((error) => {
        console.log(error);
    })
}

