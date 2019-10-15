c_my_solution = function(k, arr) {
    let windowStart = 0;
    let windowSum = 0;
    let arraySums = [];
    // let arrayGroups = []; Not needed but comment in to see the sub arrays
    // let arrayGroup = [];
    for(var windowEnd = 0; windowEnd < arr.length; windowEnd++){
    //   arrayGroup.push(arr[windowEnd]);
      windowSum += arr[windowEnd];
      if(windowEnd >= k - 1){
        // console.log(arrayGroup);
        arraySums.push(windowSum);
        // arrayGroups.push(arrayGroup);
        windowSum -= arr[windowStart];
        // arrayGroup.shift();
        windowStart += 1;
      }
    }
    var max = arraySums.reduce(function(a, b) {
      return Math.max(a, b);
    });
    return max;
  };

// Time Complexity
// The time complexity of the above algorithm will be O(N).

// Space Complexity
// The algorithm runs in constant space O(1).
  function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
      windowSum = 0,
      windowStart = 0;
  
    for (window_end = 0; window_end < arr.length; window_end++) {
      windowSum += arr[window_end]; // add the next element
      // slide the window, we don't need to slide if we've not hit the required window size of 'k'
      if (window_end >= k - 1) {
        maxSum = Math.max(maxSum, windowSum);// this what was done differently than my solution and it is a cleaner way of getting the max of an array
        windowSum -= arr[windowStart]; // subtract the element going out
        windowStart += 1; // slide the window ahead
      }
    }
    return maxSum;
  }
  
  module.exports = max_sub_array_of_size_k;
