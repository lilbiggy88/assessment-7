// 1. Sum Zero



function addToZero(arr){
    for(let i = 0; arr.length > i; i++) {
        for(let j = 0; arr.length > j; j++){
            if(i !== j){
                if(arr[i] + arr[j] === 0){
                    return true
                }
            }
        }
    } 
    return false
    }

//time complexity 0(n^2)


console.log(addToZero([]));
// // -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True


// 2. Unique Characters

function hasUniqueChars(str) {
    str.split('')
    let uniq = [];

    for(let i = 0; i < str.length; i++){
        if(uniq.includes(str[i])){
            return false   
        } else {
            uniq.push(str[i])
        }
    }
    return true
}
console.log(hasUniqueChars("Monday"));
// // -> True

console.log(hasUniqueChars("Moonday"));
// // -> False



// // 3. Pangram Sentence

// const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

// const isPangram = (array, target) => {
//   let array2 = target.toLowerCase.split("").sort();
//   array2 = array2.filter(function (entry) {
//     return entry.trim() != "";
//   });
//   array2 = [...new Set(array2)];
//   console.log(array2, array);
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array[i] === array2[j]) {
//         return true;
//       }
//     }
//     return false;
//   }
// };
// console.log(
//   isPangram(alphabetArray, "The quick brown fox jumps over the lazy dog")
// );

alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
function isPangram(sentence){
    sentence = sentence.toLowerCase()
     if (alphabets.every(x => sentence.includes(x))){
        return true
    } else {
        return false
    }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// // -> True

console.log(isPangram("I like cats, but not mice"));
// // -> False

// //4. Longest Word






const words = ["you", "know", "santa", "loves", "christmas"];
function findLongestWord(str) {
  let longestWord = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longestWord.length) longestWord = str[i];
  }
  return longestWord;
}
console.log(findLongestWord(words));
// -> 5