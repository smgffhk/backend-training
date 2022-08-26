const express = require('express');
const router = express.Router();
const orderController= require("../controllers/orderController")
const userController= require("../controllers/userController")
const productController= require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")



router.post("/creatproduct",  productController.createProduct)
router.post("/createuser", commonMW.mid, userController.createuser)
router.post("/createorder", commonMW.mid, orderController.createorder)











// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)







module.exports = router;