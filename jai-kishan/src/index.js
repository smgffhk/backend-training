const express= require ('express')
const bodyparser= require('body-parser')
const mongoose= require('mongoose')
mongoose.set('strictQuery', true)
const router= require("./route/routes")

const app= express()
 
app.use(bodyparser.json())

mongoose.connect("mongodb+srv://surajkumar96:6i0d4EhtRtZ5xCEQ@cluster0.mqcx8wl.mongodb.net/jai-kishan",{
    useNewUrlParser:true
})
.then(()=> console.log("MongoDb is Connected"))
.catch(err=> console.log(err))

app.use('/',router)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
