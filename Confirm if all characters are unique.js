console.log( unique("abcdef  hg") );
console.log( unique("abcdehgf") );
console.log( unique("abcdeef") );

function unique(str) {
    let arr = [];
    for (let char of str) {
  
      if ( !arr.includes(char) ) {
        arr.push(char);
      }
  
    }
  
    if ( arr.length == str.length ) {
      return true;
    } else return false;
  
  }