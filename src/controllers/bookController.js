const bookModel= require("../models/bookModel")

const createbook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getbookData= async function (req, res) {
    let allbook= await bookModel.find()
    res.send({msg: allbook})
}

module.exports.createbook= createbook
module.exports.getbookData= getbookData