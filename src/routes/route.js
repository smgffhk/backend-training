const express = require('express');
const router = express.Router();

router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random", function (req, res) {
    res.send("hi there")
})


router.get("/test-api", function (req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2", function (req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5", function (req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6", function (req, res) {
    res.send({ a: 56, b: 45 })
})

router.post("/test-post", function (req, res) {
    res.send([23, 45, 6])
})


router.post("/test-post-2", function (req, res) {
    res.send({ msg: "hi", status: true })
})

router.post("/test-post-3", function (req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log(req.body)

    res.send({ msg: "hi", status: true })
})



router.post("/test-post-4", function (req, res) {
    let arr = [12, "functionup"]
    let ele = req.body.element
    arr.push(ele)
    res.send({ msg: arr, status: true })
})



let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]
 

router.post('/players', function (req, res) {

    let newname = req.body

    for (i = 0; i < players.length; i++) {
        let object = players[i]

        if (object.name == newname.name)
            return res.send("player is allredy exist")
    }
    players.push(newname)

    res.send({ data: players, status: true })
});



// let booking = [
//     {
//       bookingNumber: 1,
//       bookingId: 56,
//       sportId: "",
//       centerId: "",
//       type: "private",
//       slot: "16286598000000",
//       bookedOn: "31/08/2021",
//       bookedFor: "01/09/2021",
//     },
//   ];
  
//   router.post("/players/:playerName/bookings/:bookingId", function (req, res) {
//     let playerexist = false;
//     for (let i = 0; i < players.length; i++) {
//       if (players[i].name == req.params.playerName) {
//         playerexist = true;
//       }
//     }
//     if (!playerexist) {
//       return res.send("player does not exist");
//     }
//     for (let i = 0; i < booking.length; i++) {
//       if (booking[i].bookingId == req.params.bookingId) {
//         return res.send("booking id already exist");
//       }
//     }
//     req.body.playerName = req.params.playerName;
//     req.body.bookingId = req.params.bookingId;
//     booking.push(req.body);
//     return res.send(booking);
//   });
  






let persons = [
  { name: "PK",
    age: 10,
    votingStatus: false 
  },
  { name: "SK",
    age: 20,
    votingStatus: false 
  },
  {
    name: "AA",
    age: 70,
    votingStatus: false,
  },
  {
    name: "SC",
    age: 5,
    votingStatus: false,
  },
  { name: "HO",
   age: 40,
   votingStatus: false
   },
];
router.post("/persons",function(req,res){

     let trueage=req.query.age
     let result=[]
     for(let i=0; i<persons.length; i++){
         if(persons[i].age>trueage){

           persons[i].votingStatus=true
              result.push(persons[i])
       }
     }
       res.send(result)
})
 
 
//     let eligibleAge = res.body;
//     let eligiblePersons = persons.filter(index => index.age > eligibleAge)
//     eligiblePersons.forEach(index => index.votingStatus = true);
//     res.send(eligiblePersons); 
//     //res.send(msg: players, status: true)
// })




// router.post('/person', function (req, res) {
    
//     let isageRepeated = false
//     // let age = req.body

//     //let player = players.find(p => p.name == newPlayersName)

//     for(let i = 0; i < person.length; i++) {
//         if(person.age>18) {
//             isageRepeated = true;
//             break;
//         }
//     }

//     //undefined is same as false/ a falsy value
//     if (isageRepeated) {
//         //Player exists
//         res.send("no voting")
//     } else {
        
//         res.send(person)
//     }
// });


// router.post('/person',function(req,res){
//     let person =req.body
//      let isagerepeated =false

//     for (let i=0; i<person.length; i++){
//         let person =person[i]
//       if(person.age>18){
//         isagerepeated=true;
//         res.send("voting done")
//       }
//     } 
//    res.send({ data: person, status:true})
// })







//    router.post('/players', function (req, res) {

//        //LOGIC WILL COME HERE
//        let newplayer= req.body.newplayer
//        players.push(newplayer)

//        res.send(  { data: players , status: true }  )
//    })
// router.post('/players', function (req, res) {

//     //LOGIC WILL COME HERE
//      let newplayer=req.body
//      for(i=0; i<players.length; i++){
//         let data= players[i]

//       if(data.name===newplayer)
//         res.send("players name is exits")

//      }if(data.name!==newplayer){
//         players.push(req.body)
//      }

//     res.send(  { data: players , status: true }  )
// })





module.exports = router;