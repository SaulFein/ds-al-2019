var urlifystring = function (str) {
   let newStr = str.replace(/ /g, "%");
   let endIdx = newStr.length -1;
   while(newStr[endIdx] === "%"){
       newStr = newStr.slice(0, endIdx);
       endIdx--;
   }
   return newStr;
}
module.exports = urlifystring;
