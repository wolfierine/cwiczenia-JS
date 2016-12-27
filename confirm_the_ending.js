function confirmEnding(str, target) {
  
 var first = str.length, last = target.length;
  
 if(str.substring(first - last, first) === target){
   str = true;
 } else {
   str = false;
 }
  
  return str;
}

confirmEnding("Bastian", "n");