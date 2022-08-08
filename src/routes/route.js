const express = require('express');
const lodash =require('lodash')
const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     res.send('My second ever api!')
// });


router.get('/test-me', function(req,res){
   
    let month=lodash.chunk(['january','febuary','March','Aprail','May','June','July','August','september','October','November','December'],3)
    console.log(month);
    res.send('suraj')

});

router.get('/test-me1', function(req,res){
    let oddnumber=lodash.tail([3,5,7,11,13,17,19,23,27,29]);
    console.log(oddnumber);
    res.send('suraj2')
});

router.get('/test-me2', function(req,res){
    let dublicate =lodash.union([1,3,5,1,3])
    console.log(dublicate)
    res.send('suraj3')
});

router.get('/test-me3',function(req,res){
    let pair=lodash.fromPairs( [["horror","The Shining"], ["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]])
    console.log(pair)
    res.send("suraj4")
})



module.exports = router;
// adding this comment for no reason