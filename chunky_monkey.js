function chunkArrayInGroups(arr, size) {
  
  var newArray = [], result = [];
   
  for(var i = 0; i < arr.length; i++) {
    if(i % size !== size - 1) {
      newArray.push(arr[i]);
    } else {
      newArray.push(arr[i]);
      result.push(newArray);
      newArray = [];
    }
  }
  
  if (newArray.length !== 0){
      result.push(newArray);
  }
   
  return result;
 

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
