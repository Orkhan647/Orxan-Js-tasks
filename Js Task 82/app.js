function reverseWords(sentence) {
    const words = sentence.trim().split(" ");
    const reversedWords = words.reverse();
    return reversedWords.join(" ");
  }
  
  console.log(reverseWords("hello world!  ")); 
  console.log(reverseWords("a good example"));