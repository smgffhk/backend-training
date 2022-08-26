const productModel= require('../models/productModel')

const createProduct = async function(req,res){
    let data=req.body
    let createdData=  await productModel.create(data);
    res.send({mess:createdData})
}
module.exports.createProduct= createProduct;

















// const productModel= require("../models/authorModel")

// const createAuthor= async function (req, res) {
//     let data = req.body
//     let authorId = data.dauthor_id
//     if(!authorId) return res.send({msg: 'AuthorId is mandatory in the request'})

//     let savedData= await productModel.create(data)
//     res.send({data: savedData})
// }

// module.exports.createAuthor= createAuthor
