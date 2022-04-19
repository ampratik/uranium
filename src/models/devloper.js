//A developer document should look like this
 //	{ 
//_id: ObjectId("61951bfa4d9fe0d34da86829"),
//		name:"Sabiha Khan",
//		gender:”female”,
//		percentage:75,
//batch: ObjectId("65321bfa4d9fe0d34da86829")
	

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const devloperSchema = new mongoose.Schema( {
    name: String,
    percentage :Number,
    gender:{type:String,enum:['Male','Female','Other']},
    batch:{type:ObjectId , ref:"batch"}

}, { timestamps: true });

module.exports = mongoose.model('devloper', devloperSchema)
