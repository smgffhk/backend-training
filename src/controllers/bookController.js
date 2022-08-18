const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")



//Create Book

const createBook= async function (req, res) {
    let bookData= req.body
    let savedBook= await bookModel.create(bookData)
    res.send({msg: savedBook})
}
module.exports.createBook= createBook

// const updateBook = async function (req, res) {
   
//   module.exports.updateBook
  
const updateBooks= async function (req, res) {
    let chetanBooks = await bookModel.findOneAndUpdate(
        { name: "Two states" },
        { $set:{price: 100} },
        { new: true }
      );
      let ID = chetanBooks.author_id;
      let newPrice = chetanBooks.price;
    
      let author = await authorModel.find({ author_id: ID });
      let authorName = author[0].author_name;
    
      res.send({ msg: { authorName, newPrice } });
    };
  
module.exports.updateBooks= updateBooks




const PriceBetween = async function (req, res) {
    let bookDetails = await bookModel.find({ price : {$gte: 50, $lte: 100}})
    let add = bookDetails.map( x => x.author_id)
    let bookDetails1= await authorModel.find({author_id : add}).select({author_id: 1, author_name : 2,_id : 0})
    res.send({ PriceBetween : bookDetails1})
}
module.exports.PriceBetween = PriceBetween

 















// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
