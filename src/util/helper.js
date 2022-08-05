
let a=new Date()
let printDate = function(){
   
    console.log(a)
}

const d=new Date();
let month =d.getMonth();
let Month = function(){
    console.log(month)
}

// const date = function () {
//     const d = new Date();
//     const date = d.toLocaleDateString();
//     console.log(date)
// }

// const month = function () {
//     const d = new Date();
//     const month = d.toLocaleString('en-us', { month: 'long' });

//     console.log(month)
// }





const batchInfo = function(){
    console.log("plutonium, Week3 Day5, The topic for today is NodeJs Module System.")
}


module.exports.printDate = printDate
module.exports.Month = Month
module.exports.getBatchInfo = batchInfo