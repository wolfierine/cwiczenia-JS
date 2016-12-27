function repeatStringNumTimes(str, num) {
  
  if(num <= 0) {
    str = "";
  } else {
    str = str.repeat(num);
  }
  
  return str;
}

repeatStringNumTimes("abc", 3);