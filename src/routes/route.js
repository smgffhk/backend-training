const express = require('express');
const abc = require('../introduction/intro')
//const welcome = require('../logger/logger')
 //const getBatchInfo = require('../util/helper');
//const printDate = require('../util/helper');
//const Month = require('../util/helper');
 //const toLowerCase = require('../validator/formatter');
 const toUpperCase = require('../validator/formatter');

const router = express.Router();

router.get('/test-me', function (req, res) {
    //console.log('My batch is', abc.name)
    //abc.printName()
    //welcome.welcome()
    // getBatchInfo.getBatchInfo()
     //printDate.printDate()
    //Month.Month()
    // toLowerCase.toLowerCase()
    toUpperCase.toUpperCase()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason