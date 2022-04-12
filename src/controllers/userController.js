const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const createNewBook =async function(req,res){
let  data1 = req.body 
let saveData1 = await UserModel.create(data1)
res.send({msg:saveData1})
}

const getAllBooks= async function (req, res) {
    let allUsers1= await UserModel.find()
    res.send({msg: allUsers1})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createNewBook= createNewBook
module.exports.getAllBooks= getAllBooks