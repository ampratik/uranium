const bookModel=require("../models/bookmodel")


const createNewBook =async function(req,res){
    let  data1 = req.body 
    let saveData1 = await bookModel.create(data1)
    res.send({msg:saveData1})
    }

    const getListOfBooks =async function(req,res){
        
        let saveData1 = await bookModel.find().select({bookName:true,autherName:true,_id: false})
        res.send({msg:saveData1})
        }

    const getBookInYear = async function(req,res){
        let getYear = req.query.year
        let saveData2= await bookModel.find({year: getYear})
        res.send({msg:saveData2})
        }

       // getRandomBooks - returns books that are available in stock or have more than 500 pages
        const getRandomBooks = async function(req,res){
            let savedata = await bookModel.find({ $or:[{totalPages:{$gt:1000}},{isStockAvailable:true}]})
             
            res.send({msg:savedata})
        }
     
       // getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
        //e.g if body had { name: “hi”} then you would fetch the books with this name
        //if body had { year: 2020} then you would fetch the books in this year
        //hence the condition will differ based on what you input in the request body
        
        const getParticularBooks = async function(req,res){
            let collection = req.body
            let saveData = await bookModel.find(collection)
            res.send({msg:saveData})
        }

       // getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
       const  getXINRBooks = async function(req,res){
           let savedata = await bookModel.find({'price.indianPrice': {$in:["100INR","300INR","500INR"]}})
           res.send({msg:savedata})
       }
    module.exports.createNewBook= createNewBook
    module.exports.getListOfBooks= getListOfBooks
    module.exports.getBookInYear= getBookInYear
    module.exports.getRandomBooks=getRandomBooks 
    module.exports.getParticularBooks =getParticularBooks
    module.exports.getXINRBooks = getXINRBooks