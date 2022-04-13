const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });
// String, Number
// Boolean, Object/json, array

module.exports = mongoose.model('User', userSchema) //users


//const bookSchema = new mongoose.Schema( {
//bookName:{type: String ,unique: true , required : true} ,
  //  autherName:{type: String, required : true},
    //category :{ type : String,enum:["Novel","Action and Adventure","Classics", "Comic Book or Graphic Novel",
    //"Detective and Mystery"," Fantasy",  " Historical Fiction.","horrer", " Literary Fiction"]},
    //year:{type:Number,required:true},
//},{timestamps : true});

//module.exports = mongoose.model('Book',bookSchema)



// String, Number
// Boolean, Object/json, array