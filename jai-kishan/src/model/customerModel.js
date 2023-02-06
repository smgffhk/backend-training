const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    DOB: {
        type: String
    },
    emailID: {
        type: String,
        require: true
    },
    address: {
        type: String
    },
    customerID: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

}, { timestamps: true }
);

module.exports = mongoose.model("customer", customerSchema)