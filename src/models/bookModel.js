const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema( {
    bookName: String, 
    prices: {
        indianPrice: String,
        europePrice: String
    },
    year:{
        type:Number,
        default:2021
    },
    tags:[String],
    authorName: String, 
    totalPages:Number,
    stock:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });


module.exports = mongoose.model('mongo-2', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
