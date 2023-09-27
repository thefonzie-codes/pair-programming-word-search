const transpose = require("./transpose");

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  // console.log('horizontaljoin: ', horizontalJoin);
  for (const l of horizontalJoin) {
    // console.log("l: ", l);
    if (l.includes(word)) return true;
  }
  
  const transposeLetters = transpose(letters);
  const verticalJoin = transposeLetters.map(ls => ls.join(''));
  //console.log('verticalJoin: ', verticalJoin);
  for (const v of verticalJoin) {
    //console.log("v: ", v);
    if (v.includes(word)) return true;
  }
  
  const reverseLetters = letters.map(ls => ls.reverse().join(''));
  //console.log('reverseLetters: ', reverseLetters);
  for (const l of reverseLetters) {
    //console.log("l: ", l);
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;