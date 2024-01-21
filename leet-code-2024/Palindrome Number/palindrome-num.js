// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Constraints:
// -231 <= x <= 231 - 1
// Follow up: Could you solve it without converting the integer to a string?
// const isPalindrome = function (x: number): boolean {
//   const rev = x.toString().split('').reverse().join('');
//   return rev === x.toString();
// };
var isPalindrome = function (x) {
    if (x < 0)
        return false;
    var num = x;
    var rev = 0;
    //we will keep taking the last number off of x until x = 0;
    while (x > 0) {
        var lastDigit = x % 10; //so if the number 123 the last digit will be 3, 2, 1;
        rev = rev * 10 + lastDigit; // 3, 32, 321
        x = Math.floor(x / 10); //  123 / 10 floored = 12, 12/10 floored = 1, 1/10 = 0;
    }
    return num === rev;
};
var result2 = isPalindrome(44);
var el2 = document.getElementById('result');
if (el2) {
    el2.innerHTML = JSON.stringify(result2);
}
