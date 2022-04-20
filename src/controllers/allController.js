const handler = function ( req, res){
    res.send({msg:"successfully hit the handler "});
};

module.exports.handler = handler ;