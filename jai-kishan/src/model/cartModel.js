const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    cardNumber: {
      type: String,
      required: true,
      trim: true 
    },
    cardType: {
      type: String,
      required: true
    },
    customerName: {
      type: String, 
      required: true
    },
    status: {
      type: String,
      default: "ACTIVE",
      enum: ["ACTIVE", "INACTIVE"]
    },
    vision: {
      type: String,
      required: true
    },
    customerID: {
      type: String
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
  },

  { timestamps: true }
);
// cardNumber string Auto_increment e.g: C001
// cardType String [REGULAR/SPECIAL]
// customerName string
// status string [ACTIVE/INACTIVE] Default: ACTIVE
// vision string
// customerID string Reference from customer
// tabl

module.exports = mongoose.model("cart", cartSchema);