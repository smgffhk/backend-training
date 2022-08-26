const mongoose = require('mongoose');

const userData = new mongoose.Schema( {
    name : String,
    balance : {
        type:Number,
        default:100

    },
    address: String,
    gender: {
        type: String,
        enum: ["male", "female", "Other"] 
    },
    age: Number,
    isFreeAppUser:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = mongoose.model('Userdata', userData) 