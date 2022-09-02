let axios = require("axios")

let weather = async function (req, res) {
    try {
        let city = req.query.q
        let appid=req.query.appid

        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid} `
            
        }      
    
        let result = await axios(options)
        let data=result.data
        res.status(200).send({ msg: data ,status:true })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

module.exports.weather = weather



let SortCities= async function(req,res){
    try{
        let cities= ["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
        let cityObjArray=[]
        for(i=0;i<cities.length;i++){
            let obj = {city:cities[i]}
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=0103baf675b907bc37495dc63599d083`)
            obj.temp= result.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort(function(a,b){return a.temp-b.temp})
        res.status(200).send({status:true,msg:sorted})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.SortCities=SortCities