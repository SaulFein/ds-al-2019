//OR
var bitwiseOppsOr = function (n1, n2) {
  var n1Bits = n1.toString(2);
  var n2Bits = n2.toString(2);
  var result = '';
  if (n2Bits.length < 8) {
    let n2Arr = n2Bits.split('');
    while (n2Arr.length !== 8) {
      n2Arr.unshift('0');
    }
    n2Bits = n2Arr.join('');
  }
  if (n1Bits.length < 8) {
    let n1Arr = n1Bits.split('');
    while (n1Arr.length !== 8) {
      n1Arr.unshift('0');
    }
    n1Bits = n1Arr.join('');
  }
  for (var i = 0; i < n1Bits.length; i++) {
    if (n1Bits[i] === '1' || n2Bits[i] === '1') {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
};

var bitwiseOppsAnd = function (n1, n2) {
  var n1Bits = n1.toString(2);
  var n2Bits = n2.toString(2);
  var result = '';
  if (n2Bits.length < 8) {
    let n2Arr = n2Bits.split('');
    while (n2Arr.length !== 8) {
      n2Arr.unshift('0');
    }
    n2Bits = n2Arr.join('');
  }
  if (n1Bits.length < 8) {
    let n1Arr = n1Bits.split('');
    while (n1Arr.length !== 8) {
      n1Arr.unshift('0');
    }
    n1Bits = n1Arr.join('');
  }
  for (var i = 0; i < n1Bits.length; i++) {
    if (n1Bits[i] === '1' && n2Bits[i] === '1') {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
};

var bitwiseOpps = function (n1, n2) {
  var n1Bits = n1.toString(2);
  var n2Bits = n2.toString(2);
  var result = '';
  if (n2Bits.length < 8) {
    let n2Arr = n2Bits.split('');
    while (n2Arr.length !== 8) {
      n2Arr.unshift('0');
    }
    n2Bits = n2Arr.join('');
  }
  if (n1Bits.length < 8) {
    let n1Arr = n1Bits.split('');
    while (n1Arr.length !== 8) {
      n1Arr.unshift('0');
    }
    n1Bits = n1Arr.join('');
  }
  for (var i = 0; i < n1Bits.length; i++) {
    if (n1Bits[i] === '1' && n2Bits[i] === '1') {
      result += '0';
    } else if (n1Bits[i] === '1' || n2Bits[i] === '1') {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
};
module.exports = bitwiseOpps;
