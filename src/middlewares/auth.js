const jwt = require('jsonwebtoken')


const authenticate = function (req, res, next) {
    try {
        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];
        if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
        let decodedToken = jwt.verify(token, "functionup-plutonium");
        if (!decodedToken) return res.status(401).send({ status: false, msg: "token is invalid" });

     next()

    } catch (err) {
        res.status(500).send({ msg: "Error", error: err.message })
    }

}


const authorise = async function (req, res, next) {
    try {
        // comapre the logged in user's id and the id in request
        let requestedUserId = req.params.userId
        if (requestedUserId !== req.params.userId) {
            return res.status(403).send({ status: false, msg: "permission denied" })
        }
        next()

    } catch (err) {
        res.status(500).send({ msg: "Error", error: err.message })
    }

   

}


module.exports.authenticate = authenticate
module.exports.authorise = authorise






// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
