const authorModel= require("../models/authorModel")
const bookModel= require("../models/bookModel")


//Authour Creation

const createAuthor= async function (req, res) {
    let authorData= req.body
    let savedAuthor= await authorModel.create(authorData)
    res.send({msg: savedAuthor})
} 
module.exports.createAuthor = createAuthor

// Prints Books of Chetan Bhagat
const BooksOfChetanBhagat= async function (req, res) {
    let author = await authorModel.find({ author_name: "Chetan Bhagat" })
  let ID = author[0].author_id;

  let chetanBooks = await bookModel.find({ author_id: ID });
    res.send({ChetanBhagat: chetanBooks})
}

module.exports.BooksOfChetanBhagat = BooksOfChetanBhagat