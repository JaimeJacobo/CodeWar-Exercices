
//Number of anagrams in an array of words




function anagramCounter (wordsArray) {

  let getFinalNumber = (number)=>{
    let totalSum = 0;
    for(let i = number - 1; i > 0; i--){
      totalSum = totalSum + i;
    };
    return totalSum
  };

  let arrayOfSortedAnagrams = [];
  let independentAnagrams = [];
  let finalCounter = 0;
  
  wordsArray.forEach((word)=>{
    word = word.split('')
    word.sort()
    word = word.join('')
    arrayOfSortedAnagrams.push(word)
  })

  arrayOfSortedAnagrams.forEach((word)=>{
    if(!independentAnagrams.includes(word)){
      independentAnagrams.push(word)
    }
  })

  independentAnagrams.forEach((anagram)=>{
    let counter = 0;
    for(let i = 0; i < arrayOfSortedAnagrams.length; i++){
      if(anagram == arrayOfSortedAnagrams[i]){
        counter++
      }
    }
      finalCounter = finalCounter + getFinalNumber(counter);
  })

  return finalCounter
}