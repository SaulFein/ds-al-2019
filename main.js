var slidingWindow = require('./sliding-window.js');

const result = slidingWindow(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
  console.log(`Averages of subarrays of size K: ${result}`);

// myfunction = function(n) {
//     return n;
// }

// let result = myfunction(5);

// document.getElementById("myText").innerHTML = result;