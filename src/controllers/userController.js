const UserModel= require("../models/userModel")

//---assignment---//
const basicCode= async function(req, res,next) {
    let date=new Date();
    let ip=req.ip;
    let url= req.originalUrl;
    console.log(date," ", ip," ",url)
    }
    module.exports.basicCode= basicCode

// const basicCode= async function(req, res) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)


//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     res.send({ msg: "This is coming from controller (handler)"})
//     }

const commonHandler = async function(req, res, next) {
    console.log('I am inside the common route handler')
    next()
    //res.send({status: true, msg: "Hi there!"})
}

module.exports.commonHandler = commonHandler




















const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
