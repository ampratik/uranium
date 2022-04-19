//A batch document looks like this.
//{
//		_id: ObjectId("65321bfa4d9fe0d34da86829"),
//name: “Uranium”,
//size: 250,
//program: “backend”
//}

const mongoose = require('mongoose');


const batchSchema = new mongoose.Schema( {
    name: String,
    size:Number,
   program:{type:String ,enum:['frontend','backend']}

}, { timestamps: true });

module.exports = mongoose.model('batch', batchSchema)