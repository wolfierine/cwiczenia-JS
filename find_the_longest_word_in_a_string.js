
function findLongestWord(str) {
  
  var words = [], i, maximum;
  
  words = str.split(" ");
  
  for(i = 0; i < words.length; i++) {
    words[i] = words[i].length;
  }
  
  maximum = Math.max.apply(Math, words);

  return maximum;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
