let sentence = 'I am very hungry';
alert( getLongestWord(sentence) );

// function
function getLongestWord(string) {
    let words = string.split(' ');
    let lengths = words.map( (word) => word.length );
    let maxLength = Math.max(...lengths);
    let targetIndex = lengths.findIndex(
        (length) => (length == maxLength)
        );
    return words[targetIndex];
}
//---------------------------------------------------