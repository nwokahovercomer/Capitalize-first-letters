console.log(capitalizeWords("i woke up early today") );

function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    let newWords = words.map( (item) => item[0].toUpperCase() + item.slice(1) );
    let newSentence = newWords.join(" ");
    return newSentence;
  }