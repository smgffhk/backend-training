const mongoose = require('mongoose');
const bookSchema=new mongoose.Schema({
    bookName:{ type:String, required:true },
    authorName:String,
    category:{
        type:String,
        enum:["classic","advanterous","horror","comic","crime"]
    },
    year:Number
},{ timestamps: true })

     module.exports = mongoose.model('Book1', bookSchema) 