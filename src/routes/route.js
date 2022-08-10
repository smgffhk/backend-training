const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

app.get("/sol1", function (req, res) {
    let arr= [1,2,3,5,6,7]
    let sumofnumber= (arr[arr.lenght-1]*(arr[arr.lenght-1]+1))/2
    someofArr= arr.reduce((a,b) => a+b)
    let missingNumber = sumofnumber-someofArr
    res.send(  { data: missingNumber  }  );
  });


router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
           
    let arr= [33, 34, 35, 37, 38]
    let length= arr.length
   
    sumOfArr = arr.reduce((a,b)=> a+b)
   
    let first= arr[0]
    let last= arr.pop()
    let consecutiveSum= (length + 1) * (first+ last ) / 2
    let missingNumber= consecutiveSum - sumOfArr
   
    res.send(  { data: missingNumber  }  );
   
   })




module.exports = router;
// adding this comment for no reason
