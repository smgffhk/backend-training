const express = require('express');
const router = express.Router();

const cartController = require("../controller/cartController")
const customerController = require("../controller/customerController")

router.post("/createCustomer", customerController.createcustomer)
router.get("/getCustomer", customerController.getCustomer)
router.delete("/deleteCustomer", customerController.deleteCustomer)


router.post("/createCard", cartController.createCard)

module.exports = router;