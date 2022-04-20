const middleware1 = function (req, res, next) {
    let dateTime = new Date();
    let reqRoute = req.path ; 
   let ipAddress = req.ip ;
   
   const infoArr = [dateTime , reqRoute , ipAddress]

   console.log(infoArr);
   next();
};

module.exports.middleware1 = middleware1 ;