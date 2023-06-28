
function printNumbers(){
    let result=[];
    for (let x=0;x<10;x++) {
      if (x % 2 ==0) {
          result.push(x+ " is even")
      } else {
          result.push(x+ " is odd")
      }
  }
  return result;
  }

  module.exports=printNumbers;