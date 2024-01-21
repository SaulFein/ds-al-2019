function romanToInt(s: string): any {
  const romans = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    III: 3,
    II: 2,
    I: 1,
  };

  let checkFor = ['CM', 'CD', 'XC', 'XL', 'IX', 'IV'];
  let sArray = s.split(''); //['L', 'V', 'I', 'I', 'I']
  let res = 0;
  for (let i = 0; i < sArray.length; i++) {
    if (checkFor.some((x) => x == sArray[i] + sArray[i + 1])) {
      res = res += romans[sArray[i] + sArray[i + 1]];
      i = i += 1;
    } else {
      res = res += romans[sArray[i]];
    }
  }
  return res;
}

//TODO try to solve without check for ( check if sArray[i] < sArray[i+1])

//Awesome clean answers from leet code:
// function romanToInt(s: string): number {
//   const integers = s.split('').map(c => roman[c]);

//   return integers.reduce((acc, x, i) => x < integers[i+1] ? acc - x : acc + x, 0);
// };

const result2 = romanToInt('LVIII');

const el2 = document.getElementById('result');
if (el2) {
  el2.innerHTML = JSON.stringify(result2);
}
