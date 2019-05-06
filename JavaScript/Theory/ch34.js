var date = new Date();
date.setFullYear(2018);
console.log(date);
var diff = -date + (new Date()).setHours(6);
console.log(diff);
var sDiff = diff / (1000*60*60*24);
console.log(sDiff);