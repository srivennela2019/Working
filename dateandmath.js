var d = new Date();
// var d = new Date(2018, 11, 24, 10, 33, 30, 0);
// var d = new Date(2018, 11, 24, 10, 33);
// var d = new Date(2018, 11, 24, 10);
// var d = new Date(2018, 11, 24);
// var d = new Date(2018, 11);
// var d = new Date(2018);
// var d = new Date(99, 11, 24);
// var d = new Date(9, 11, 24);
// var d = new Date("October 13, 2014 11:13:00");
var el = document.getElementById("date");
el.innerHTML = d;
// el.innerHTML=d.getTime();
// el.innerHTML=d.getFullYear();
// el.innerHTML=d.getMonth();
// el.innerHTML= d.getMinutes();

// d.setTime(21); //takes values from 1-31
// d.setFullYear(2019);
// d.setMonth(11); // takes values from 0-11
//d.setDate();
// d.setMinutes(12); //takes values from 0-50
// d.setSeconds(54); //takes values from 0-50
// d.setMilliSeconds(54); //takes values from 0-999

document.getElementById("math").innerHTML =
  "<h1> Math Constants</h1><p><b>Math.E:</b> " +
  Math.E +
  "</p>" +
  "<p><b>Math.PI:</b> " +
  Math.PI +
  "</p>" +
  "<p><b>Math.SQRT2:</b> " +
  Math.SQRT2 +
  "</p>" +
  "<p><b>Math.SQRT1_2:</b> " +
  Math.SQRT1_2 +
  "</p>" +
  "<p><b>Math.LN2:</b> " +
  Math.LN2 +
  "</p>" +
  "<p><b>Math.LN10:</b> " +
  Math.LN10 +
  "</p>" +
  "<p><b>Math.LOG2E:</b> " +
  Math.LOG2E +
  "</p>" +
  "<p><b>Math.Log10E:</b> " +
  Math.LOG10E +
  "</p><br><h1> Math Functions</h1>" +
  "<p><b>Math.ceil(4.3):</b> " +
  Math.ceil(4.3) +
  "</p>" +
  "<p><b>floor(4.7):</b> " +
  Math.floor(4.7) +
  "</p>" +
  "<p><b>Absolute(-8.9):</b> " +
  Math.abs(-8.9) +
  "</p>" +
  "<p><b>Square root(4):</b> " +
  Math.sqrt(4) +
  "</p>" +
  "<p><b>Power(2,4):</b> " +
  Math.pow(2, 4) +
  "</p>" +
  "<p><b>max(2,3,.5,1,9):</b> " +
  Math.max(2, 3, 5, 1, 9) +
  "</p>" +
  "<p><b>min(2,3,.5,1,9):</b> " +
  Math.min(2, 3, 0.5, 1, 9) +
  "</p>" +
  "<p><b>Random:</b> " +
  Math.random();
