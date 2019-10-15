var slidingWindow = require('./sliding-window.js');
var maxSumSubarrayOfSizeK = require('./max-sum-subarray-of-size-k.js');

// myfunction = function(n) {
//     return n;
// }
// let result = myfunction(5);
// document.getElementById("myText").innerHTML = result;

// const result = slidingWindow(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
//   console.log(`Averages of subarrays of size K: ${result}`);

const result = maxSumSubarrayOfSizeK(3, [2, 1, 5, 1, 3, 2]);
  console.log(`Maximum sum of subarrays of size K: ${result}`);

