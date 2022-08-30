
const jwt = require('jsonwebtoken')
let decodedToken

const authenticate = function(req, res, next) {
    let token = req.headers["x-Auth-token"];
    if(!token) token = req.headers["x-auth-token"];
    if(!token) return res.send({ status: false, msg: "token must be present" }); 
    let decodedToken = jwt.verify(token, "functionup-plutonium");
    if(!decodedToken) return res.send({ status: false, msg: "token is invalid" });
    next()
}


const authorise = async function (req, res, next) {
    // comapre the logged in user's id and the id in request
    let requestedUserId = req.params.userId
    if (requestedUserId !== req.params.userId) {
        return res.send({ status: false, msg: "permission denied" })
    }
    next()

}


module.exports.authenticate = authenticate
module.exports.authorise = authorise