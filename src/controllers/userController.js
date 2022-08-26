const userModel = require("../models/userModel")

const createUser = async function (req, res) {
    req.body["isFreeAppUser"] = req.isFreeAppUser;
    let user = req.body;
    let userData = await userModel.create(user)
    res.send({ msg: userData })
}
module.exports.createuser = createUser 