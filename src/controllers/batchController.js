const batchModel= require("../models/Batch")

const createBatch= async function (req, res) {
    let info = req.body
    let batchCreated = await batchModel.create(info)
    res.send({data: batchCreated})
}

module.exports.createBatch=createBatch