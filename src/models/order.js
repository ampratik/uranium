//_id: ObjectId("61951bfa4d9fe0d34da86344"),
//	userId: “61951bfa4d9fe0d34da86829”,
//	productId: “61951bfa4d9fe0d34da86344”
//	amount: 0,
//	isFreeAppUser: true, 
//	date: “22/11/2021”


const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


    const orderSchema = new mongoose.Schema( {
      userId: {type:ObjectId , ref:"user"},
      productId: {type:ObjectId , ref:"Mybook"},
      amount:Number,
      isFreeAppUser:Boolean,
    }, { timestamps: true });
    
    module.exports = mongoose.model('Mybook', orderSchema)