const devloperModel = require("../models/devloper")
const batchModel = require("../models/Batch")
//2. Write an api POST  /developers that creates a developer from the details in the request body.
// Please note that the gender should be an enum with the following allowed values - male, female and other. Also,
// batch attribute is a reference to the batches collection.
const createDevloper = async function (req, res) {
    let info = req.body
    let devloperCreated = await devloperModel.create(info)
    res.send({ data: devloperCreated })
}

module.exports.createDevloper = createDevloper



//3. Write an api GET /scholarship-developers that fetches the list of eligible developers for scholarship. An eligible developer
// is female with percentage greater than or equal to 70
const scholarship = async function (req, res) {
    let info = await devloperModel.find({ gender: 'Female', percentage: { $gte: 70 } })
    res.send({ data: info })
}

module.exports.scholarship = scholarship




//4. Write an api GET /developers?percentage=value1&program=value2 that only returns the developers for a given program with a percentage
// greater than or equal to the received value. Please note the batch name and the program values are received in the request as query params.
//For example GET /developers?percentage=55&program=radium should return all the developers from radium batch with
 //a percentage greater than or equal to 55
const developers = async function (req, res) {
    const percentage = req.query.params.percentage
    const programm = req.query.params.program
    // const devpercentage = await developerModel.find({ percentage: { $gte: percentage } })
    //program find then 
    const devBatch = await batchModel.find({ name: programm }).select({ _id: 1 });
    // console.log(devBatch);
    let arrayOfId = [];
    for (let i = 0; i < devBatch.length; i++) {
        let a = devBatch[i]._id
        arrayOfId.push(a)
    }
    const conditionmatch = await devloperModel.find({ batch: { $in: [arrayOfId] }, percentage: { $gte: percentage } }).populate("batch")
    // console.log(idmatch);
    res.send({ data: conditionmatch })
}

    module.exports.developers = developers