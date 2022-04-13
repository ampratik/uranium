const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: { type: String, required: true },
    autherName: "String",
    price: {
        indianPrice: "String",
        europianPrice: "String"
    },
    year: { type: Number, default: 2021 },
    tags: ["string"],
    totalPages: Number,
    isStockAvailable: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)