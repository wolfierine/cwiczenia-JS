function largestOfFour(arr) {
  
  var maximum, finalArray = [];
  
  for(var i = 0; i < arr.length; i++){
    maximum = Math.max.apply(Math, arr[i]);
    finalArray.push(maximum);
  }
  
  return finalArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);