const fs = require('fs');
// const file = require('./new')

// fs.readFile('./new/fileinput.txt', function (err,data) {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("this is async" + data.toString());
// 	}
// })

// var data = fs.readFileSync('fileinput.txt');
let ONE_HOUR = 60 * 60 * 1000; /* ms */
let data =((new Date) - "2019-07-16T08:10:14.282Z") > ONE_HOUR
console.log(data)
let d = new Date();
let t = d.getTimezoneOffset();
console.log(d.setMinutes(d.getMinutes()+t));
console.log(Date(d.setMinutes(d.getMinutes()+t)) );
console.log("lll")
console.log(Date(1563152420908));



console.log(d.setMinutes(d.getMinutes()+t));
console.log(Date(d.setMinutes(d.getMinutes()+t)) );
console.log("lll")
console.log(Date(1563152420908));