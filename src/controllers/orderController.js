const userModel= require('../models/userModel')
const productModel= require('../models/productModel')
const orderModel= require('../models/orderModel')
 



const createOrder = async function (req, res) {
    req.body["isFreeAppUser"] = req.isFreeAppUser;
    let data = req.body;
    let userId = req.body.userId
    let productId = req.body.productId

    let User = await userModel.findById(userId);
    if (!User) {
        res.send({ msg: "userId is not valid" })
    }

    let Product = await productModel.findById(productId);
    if (!Product) {
        res.send({ msg: "productId is not valid" })
    }


    if (data["isFreeAppUser"] === "true") {
        amount = 0;
    } else {
        amount = Product.price;

        if (User.balance < amount) {
            return res.send("User has insufficient balance");
        } else {
            User = await userModel.findById(data.userId).updateOne({
                $inc: { balance: -amount },
            });
        }
    }
    data["amount"] = amount;

    const savedData = await orderModel.create(data);
    res.send({ msg: savedData });
};
module.exports.createorder = createOrder
 

// const createorder = async function (req, res) {
//     let order = req.body;
//     let headers=req.headers["isfreeappuser"]
//     let product = req.body.productId;
//     let user = req.body.userId;
   
//     //Valid product Checking
//     let productId = await productModel.findById(product)
    
//     if(!productId) {
//          res.send({msg :"product is not present"})
//     }
    
//     //  //Valid user Checking
//     let userId = await userModel.findById(user)
//     if(!userId) {
//         return res.send("user is not present")
//     }
     
//     if(order["isfreeappuser"]=="true"){
//         amount=0;
//     }else{
//         amount =product.price;

//         if(user.blance<amount){
//             return res.send("insuuficient blance");
//         }else{
//             user = await userModel.findById(order.userId).updateOne({
//                 $inc: {blance: -amount},
//             })
//         }
//     }order["amount"] = amount;

    

//     let saveorderData = await orderModel.create(order)
//     res.send({ msg: saveorderData })
// }
// module.exports.createorder = createorder

   