let  printDate = function(){
    let currentDate = new Date()
 console.log('the current time in india is:',new Date())
}
let printMonth = function() {
let currentmonth = new Date()
console.log('hottest month in the year is :',currentmonth.getMonth() + 1)
}
 let getBatchInfo = function() {
    console.log('Uranium, W2D4, the topic for today is Nodejs module system assignment discussion')
}
	
module.exports.printTodaysDate = printDate
module.exports.printCurrentMonth = printMonth
module.exports.printBatchInformation = getBatchInfo
