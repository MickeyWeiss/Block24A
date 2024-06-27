const TODO = "REPLACE ME!!!";
// Note: There are some simple test cases at the bottom of this file!

/**
 * @param {string[]} topics - an array of topic words
 * @param {string} sentence - a space-separated string of words
 * @returns {boolean} whether `sentence` contains any of the words in `topics`
 */
const isRelevant = (topics, sentence)=>{
  let sentenceArray = sentence.split(" ")
  console.log(sentenceArray)
  for(let i = 0; i < sentenceArray.length; i++){
    if(sentenceArray.inludes(topics)){
      return true
    }else{
      return false
    }
};
}
/**
 * @param {string[]} topics - an array of topic words
 * @returns {(sentence: string) => boolean} a function that takes a sentence
 *  and returns whether it is relevant to `topics`
 */
const about = (topics)=>{
  return isRelevant
};

/**
 * @param {(sentence: string) => boolean} criterion - a function that
 *  takes a sentence and returns a boolean
 * @param {string[]} sentences - an array of space-separated strings of words
 * @returns {string[]} the subset of `sentences` for which `criterion` returns true
 */
const getRelevantSentences = (criterion, sentenceArray)=>{

  let sentencesArray = sentences.split(' , ')
  console.log(sentencesArray)
  for(let i = 0; i < sentencesArray.length; i++){
    if(sentencesArray.inludes(criterion)){
      return true
    }else{
      return false
    }
};

};

/**
 * @param {string} str1 - the first string to compare
 * @param {string} str2 - the second string to compare
 * @returns {number} the absolute difference in length between `str1` and `str2`
 */
const getDistanceByLength = (str1, str2)=>{
  if(str1.length > str2.length){
    return str1
  }else if(str2.length > str1.length){
    return str2
  }else{
    console.log("Strings are same length")
  }

};

/**
 * @param {string} word - the original string
 * @param {string[]} words - an array of strings
 * @param {(str1: string, str2: string) => number} distanceFn - a function that
 *  takes two strings and returns a number representing the distance between them
 * @param {number} threshold - the maximum distance that is still considered "close"
 * @returns {string} the string in `words` with the minimum distance to `word`
 *  as calculated by `distanceFn`, unless that distance is strictly greater than
 *  the `threshold`, in which case the original `word` is returned.
 */
const getClosestWord = (origWord, words, distanceFunction, threshold, num)=>{
  let smallestDistance
  const theWord = words.reduce((final, word)=>{
    if(!smallestDistance){
      const currentDist = distanceFunction(origWord, word)
      smallestDistance = currentDist
      return final = word
    }else{
      if(currentDist<smallestDistance){
        smallestDistance = currentDist
        return final = word
      }else
      return final
    }
  }, '')
  if(smallestDistance<threshold){
    return theWord
  }else{
    return origWord
  }
};

/**
 * @param {string} word - the original string
 * @param {string[]} words - an array of strings
 * @param {number} threshold - the maximum distance that is still considered "close"
 * @returns {string} the string in `words` that is the closest to `word` in _length_,
 *  unless that distance is strictly greater than the `threshold`,
 *  in which case the original `word` is returned.
 */
const getClosestWordByLength = (origWord, words, num)=>{

};

/* === Simple Test Cases === */
// The provided logs print the expected output first.

console.log("--- isRelevant ---");
const sentence = "the quick brown fox jumps over the lazy dog";
const catWords = ["cat", "kitten"];
const dogWords = ["dog", "puppy"];

console.log(true, isRelevant(dogWords, sentence));
console.log(false, isRelevant(catWords, sentence));

console.log("--- about ---");
const aboutDogs = about(dogWords);
console.log(true, aboutDogs(sentence));
console.log(false, aboutDogs("this sentence is about cats"));

console.log("--- getRelevantSentences ---");
const sentences = [
  "I have a pet dog",
  "I have a pet cat",
  "I don't have any pets",
];
console.log(["I have a pet dog"], getRelevantSentences(aboutDogs, sentences));
console.log(
  ["I don't have any pets"],
  getRelevantSentences((s) => s.length > 17, sentences)
);

console.log("--- getClosestWord ---");
let words = ["bed", "bank", "fence", "bridges"];
console.log("bed", getClosestWord("hi", words, getDistanceByLength, 3));
console.log("hi", getClosestWord("hi", words, getDistanceByLength, 0));
console.log("fence", getClosestWord("rivers", words, getDistanceByLength, 2));

console.log("--- getClosestWordByLength ---");
console.log("bed", getClosestWordByLength("hi", words, 3));
console.log("hi", getClosestWordByLength("hi", words, 0));
console.log("fence", getClosestWordByLength("rivers", words, 2));
