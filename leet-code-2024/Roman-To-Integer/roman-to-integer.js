function romanToInt(s) {
    var romans = {
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
    var checkFor = ['CM', 'CD', 'XC', 'XL', 'IX', 'IV'];
    var sArray = s.split(''); //['L', 'V', 'I', 'I', 'I']
    var res = 0;
    var _loop_1 = function (i) {
        if (checkFor.some(function (x) { return x == sArray[i] + sArray[i + 1]; })) {
            res = res += romans[sArray[i] + sArray[i + 1]];
            i = i += 1;
        }
        else {
            res = res += romans[sArray[i]];
        }
        out_i_1 = i;
    };
    var out_i_1;
    for (var i = 0; i < sArray.length; i++) {
        _loop_1(i);
        i = out_i_1;
    }
    return res;
}
var result2 = romanToInt('LVIII');
var el2 = document.getElementById('result');
if (el2) {
    el2.innerHTML = JSON.stringify(result2);
}
