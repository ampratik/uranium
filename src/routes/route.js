const express = require('express');
const logger = require('./logger')
const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});

router.get('/movies', function (req, res) {
    let arr1 = ['dr_strange','dune','morbius','dont_look_up','inception','interstealler','shangchi']
  console.log(arr1)
  res.send(arr1)
});

router.get('/Movies/:indexNumber', function (req, res) {
    let arr2 = ['dr_strange','dune','morbius','dont_look_up','inception','interstealler','shangchi']
   let abc = req.params.indexNumber
   if (abc < arr2.length){
       res.send(arr2[abc])
   }
   else {
       res.send('use valid index')
   }

       
});
 

router.get('/films', function (req, res) {
let arr3 = [ {id : 1 , name : 'ehternals'}, 
            { id: 2, name: 'without remorse'},
            {id: 3, name : 'tenet' }, 
            { id: 4, name : 'Finding Nemo' } ]
   
 res.send(arr3)
});

router.get('/Films/:Filmid', function (req, res) {
    let arr4 = [ {id : 1 , name : 'ehternals'}, 
                { id: 2, name: 'without remorse'},
                {id: 3, name : 'tenet' }, 
                { id: 4, name : 'Finding Nemo' } ]
                let xyz = req.params.Filmid
                if (xyz < arr4.length){
                    res.send(arr4[xyz])
                }
                else {
                    res.send('No movie exists with this id')
                }
    });


      
         

module.exports = router; 