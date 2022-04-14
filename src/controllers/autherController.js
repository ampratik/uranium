const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")


const authorsInfo= async function (req, res) {
    let data= req.body

    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}
    module.exports.authorsInfo = authorsInfo

   const getAuthorInfo= async function (req, res) {

    let data= await authorModel.find({authorName:"Chetan Bhagat"})
    let id = data[0].author_id
    let bName = await bookModel.find({author_id:id}).select({bookName:1,_id:0})

    res.send({msg: bName})
}

const updatePrice= async function (req, res) {

    let data= await bookModel.find({bookName:"Two States"})
    let id = data[0].author_id
    let aName = await authorModel.find({author_id:id,}).select({authorName:1,_id:0})
    let bName = data[0].authorName
    const priceUpdate = await bookModel.findOneAndUpdate({bookName:bName},{price:100},{new:true}).select({price:1,_id:0})

    res.send({msg: aName,priceUpdate})
}
const costBetween= async function (req, res) {

    let data= await bookModel.find({price:{ $gte: 50, $lte: 100}}).select({author_id:1 , _id:0})
    let id = data.map(inp =>inp.author_id)
     let arr = []
     for(let i=0;i<id.length;i++){
         let x = id[i]
    const abc = await authorModel.find({author_id:x}).select({authorName:1,_id:0})
    arr.push(abc)
     }
     const authord = arr.flat()
         res.send({msg:authord})
    }    
    




    module.exports.authorsInfo = authorsInfo
    module.exports.getAuthorInfo = getAuthorInfo
    module.exports.updatePrice = updatePrice 
    module.exports.costBetween = costBetween 