const mid= function ( req, res, next) {
    let token = req.headers["x-auth-token"];
    if(!token){
        res.send("headers x-Auth-token require")
    }
    
    next()
} 

module.exports.mid = mid;   