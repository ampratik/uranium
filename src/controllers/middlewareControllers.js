const req = require("express/lib/request")
const UserModel= require("../models/userModel")
const orderModel= require("../models/order")
const productModel = require("../models/product")
const { modelName } = require("../models/order")

const product = async function(req, res) {
 let  data = req.body 
let info = await productModel.create(data)
res.send(info)
    }

    const createBuyer = async function(req, res) {
        let  data = req.body 
        let headers = req.headers
        let apptype = headers["isFreeAppUser"]
        if(!apptype){
            apptype = headers["isfreeappuser"]
        }
        if(!apptype){return res.send({status:false , msg: "freeappuser status is missing"}) }
       let info = await UserModel.create(data)
       res.send( {status:true , data:info})
    }
   


    
const createOrder = async function (req, res) {
    let order = req.body
    let headers = req.headers
    let userId = order.userId
    let productId = order.productId
    


    // ------ Validate the userId
    let user = await UserModel.findById(userId)

    if (!user) {
        return res.send({ message: "Not a valid user id" })
    }


    //------- Validate the productId
    let product = await productModel.findById(productId)
    // console.log(typeof(productId))

    if (!product) {
        return res.send({ message: "Not a valid product id" })
    }


    //--------Adding a new attribute to requests body
    order.date = (new Date().toLocaleDateString())


    let apptype = headers["isFreeAppUser"]
    if(!apptype){
        apptype = headers["isfreeappuser"]
    }
    if(!apptype){return res.send({status:false , msg: "freeappuser status is missing"}) }
   
    if (req.headers.isfreeappuser == 'true') {
        order.isFreeAppUser = true
        order.amount = 0
        let savedData = await orderModel.create(order)
           return  res.send({ msg: savedData })

    }
    else {

        //console.log(user.balance);
        if (user.balance >= product.price) {
            order.amount = product.price

            let new_balance = user.balance - product.price
            order.isFreeAppUser = false
            let user1 = await UserModel.findOneAndUpdate(
                { _id: userId },
                {
                    $set: { balance: new_balance }
                }
            )

            let savedData = await orderModel.create(order)
            res.send({ msg: savedData })
        }
        else {
            res.send({ message: "The user doesn't have enough balance" })
        }
    }

}


   










    module.exports.createOrder = createOrder
    module.exports.createBuyer= createBuyer
    module.exports.product = product