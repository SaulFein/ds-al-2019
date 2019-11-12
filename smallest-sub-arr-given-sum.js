const smallest_subarray_with_given_sum = function(s, arr) {
    // TODO: Write your code here
    let windowStart = 0;
    let windowSum = 0;
    let smallestCountSoFar = null;
    let window = []
    if(arr.indexOf(s) > -1 ){
        return 1;
    }
    for (var windowEnd = 0; windowEnd < arr.length; windowEnd++){
      windowSum += arr[windowEnd];
      window.push(arr[windowEnd]);
      if(windowSum >= s){
        if(smallestCountSoFar){
          if(window.length < smallestCountSoFar){
            smallestCountSoFar = window.length;
          }
        } else {
          smallestCountSoFar = window.length;
        }
        windowSum -= arr[windowStart];
        window.shift();
        windowStart++;
        if(windowSum >= s){
          smallestCountSoFar = window.length;
          windowSum -= arr[windowStart];
          window.shift();
          windowStart++;
        } else if(smallestCountSoFar <= window.length + 1) {
            windowSum -= arr[windowStart];
            window.shift();
            windowStart++;
        }
        windowStart++;
        if(windowEnd < windowStart){
            windowEnd = windowStart;
        }
      }
    }
    if(!smallestCountSoFar){
      return 0;
    }
    return smallestCountSoFar;
  };
  
  //Grocking the Coding interviews solution
  function smallest_subarray_with_given_sum(s, arr) {
    let windowSum = 0,
      minLength = Infinity,
      windowStart = 0;
  
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd]; // add the next element
      // shrink the window as small as possible until the 'window_sum' is smaller than 's'
      while (windowSum >= s) {
        minLength = Math.min(minLength, windowEnd - windowStart + 1);
        windowSum -= arr[windowStart];
        windowStart += 1;
      }
    }
  
    if (minLength === Infinity) {
      return 0;
    }
    return minLength;
  }
//   Time Complexity
//   The time complexity of the above algorithm will be O(N)O(N). The outer for loop runs for all elements and the inner while loop processes each element only once, therefore the time complexity of the algorithm will be O(N+N)O(N+N) which is asymptotically equivalent to O(N)O(N).
  
//   Space Complexity
//   The algorithm runs in constant space O(1)O(1).
  module.exports = smallest_subarray_with_given_sum;


