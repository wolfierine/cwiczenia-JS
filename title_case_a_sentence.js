function titleCase(str) {
  
  pieces = str.toLowerCase().split(" ");
  
  for(var i = 0; i < pieces.length; i++){
   pieces[i] = pieces[i][0].toUpperCase() + pieces[i].substring(1);
  }
  
  return pieces.join(" ");
}

titleCase("I'm a little tea pot");