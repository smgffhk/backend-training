const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")
const bookModel = require("../models/bookModel")

// const createBook= async function (req, res) {
//         let book = req.body
//         let bookCreated = await bookModel.create(book)
//         res.send({data: bookCreated})
//     }
//     module.exports.createBook= createBook

//    const createBook = async function (req, res) {
 
//     let {name,price,rating, author,publisher} = req.body

//     //check author
//     if (!author) {
//         return res.send({ status: true, msg: "author not found" })
//     }
//     let checkauthor = await authorModel.findById(author)
//     if (!checkauthor) {
//         return res.send({ data: bookCreated ,msg: "author not exit" })
//     }

//     //check publisher
//     if (!publisher) {
//         return res.send({ status: true, msg: "publisher not found" })
//     }
//     let checkpublisher = await publisherModel.findById(publisher)
//     if (!checkpublisher) {
//         return res.send({ msg: "publisher not exit" })
//     }

//     //Creating A Book
//     let bookCreated = await bookModel.create(req.body.author.publisher)
//     res.send({ data: bookCreated })
// }

// module.exports.createBook= createBook
 
 
// const createBook= async function (req, res) {

//     //Valid Author Checking
//     let authorId = await authorModel.findById(req.body.author)
//     if(!authorId) {
//          res.send({msg :"Author is not present"})
//     }
//     //Valid Publisher Checking
//     let publisherId = await publisherModel.findById(req.body.publisher)
//     if(!publisherId) {
//         return res.send("Publisher is not present")
//     }
//     //Creating A Book
//     let bookCreated = await bookModel.create(req.body)
//     res.send({data: bookCreated})
// }
// module.exports.createBook= createBook

const createBook = async function (req, res) {
    let body = req.body;
    let authors = req.body.author;
    let publisher = req.body.publisher;
    let author_id = await authorModel.findById(authors).select({_id:1});
    let publisher_id = await publisherModel.findById(publisher).select({_id:1});
    if(!authors){
        return res.send("this detail is required");
    }if(!author_id){
        return res.send("the author is not present");
    }if(!publisher){
       return res.send("this details is required");
    }if(!publisher_id){
        return res.send("the publisher is not present");
    }
    let bookCreated = await bookModel.create(body);
       return res.send(bookCreated);
    }
    module.exports.createBook = createBook

const getBooksallData= async function (req, res) {
    let books = await bookModel.find().populate(['author','publisher'])
    res.send({data: books})
}
module.exports.getBooksallData = getBooksallData


const allbooks= async function (req, res) {
    let allbooks= await bookModel.updateMany( 
        { publisherName: {$in :["penguin","HarperCollins"]}},
        { $set: {isHardCover:false } } 
     )
     res.send( { msg: allbooks})
}

module.exports.allbooks=allbooks



 
const updateBookPrice=async function(req,res){
    let objectId =await authorModel.find({rating:{$gt:3.5}})
    let updatedPrice = await bookModel.updateMany(
        {author: {$in: objectId}}, 
        {$inc: {price : +10}})
    res.send({updatedPrice : updatedPrice})
}

// const updaterating = async function(req,res){
//         let ratenewbook = await AuthorModel.find({rating:{$gt:3.5}}).select({_id:1});
//         let rate2 = ratenewbook.map(y=>y["_id"]);
//         let updatenewrate = await BookModel.updateMany({author : {$in:(rate2)}},{$inc:{price: +10}});
//         res.send(updatenewrate);
//     }



module.exports.updateBookPrice=updateBookPrice
