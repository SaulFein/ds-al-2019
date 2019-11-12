var slidingWindow = require('./sliding-window.js');
var maxSumSubarrayOfSizeK = require('./max-sum-subarray-of-size-k.js');
var smallestSubArrGivenSum = require('./smallest-sub-arr-given-sum.js');
// myfunction = function(n) {
//     return n;
// }
// let result = myfunction(5);
// document.getElementById("myText").innerHTML = result;

// const result = slidingWindow(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
//   console.log(`Averages of subarrays of size K: ${result}`);

const result = smallestSubArrGivenSum(8, [3, 4, 1, 1, 6]);
  console.log(`Smallest Sub Arr of Given Sum: ${result}`);

