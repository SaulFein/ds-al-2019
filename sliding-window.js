// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
//Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

//Brute Force
//Time complexity: Since for every element of the input array, we are calculating the sum of its next ‘K’ elements, 
//the time complexity of the above algorithm will be O(N*K)O(N∗K) where ‘N’ is the number of elements in the input array.
// function find_averages_of_subarrays(K, arr) {
//     const result = [];
//     let lessThan = arr.length - K + 1;
//     for (i = 0; i < lessThan; i++) {
//       console.log(i + " is less than " + lessThan );
//       // find sum of next 'K' elements
//       sum = 0.0;
//       for (j = i; j < i + K; j++) {
//         sum += arr[j];
//       }
//       result.push(sum / K); // calculate average
//     }
  
//     return result;
//   }
  
  
  //const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
  //console.log(`Averages of subarrays of size K: ${result}`);

  //Sliding Window
  //Time complexity: O(N)
  function find_averages_of_subarrays(K, arr) {
    const result = [];
    let windowSum = 0.0,
      windowStart = 0;
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd]; // add the next element
      // slide the window, we don't need to slide if we've not hit the required window size of 'k'
      if (windowEnd >= K - 1) {
        result.push(windowSum / K); // calculate the average
        windowSum -= arr[windowStart]; // subtract the element going out
        windowStart += 1; // slide the window ahead
      }
    }
  
    return result;
  }
  
  
  
  module.exports = find_averages_of_subarrays;
