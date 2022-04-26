// question 1 
function max(firstNum, secondNum){
    if (firstNum > secondNum) {
      console.log(firstNum + " is larger than " + secondNum)
    }else if (firstNum < secondNum) {
      console.log(firstNum + " is less than " + secondNum)
    } 
      return
    
  }
  
  max(680, 100)
  
  
  // question 2
  function max(firstNum, secondNum, thirdNum){
   if (firstNum > secondNum && thirdNum) {
      console.log(firstNum + " is larger than " + secondNum + " and " + thirdNum) 
    }else if (firstNum < secondNum && thirdNum) {
      console.log(firstNum + " is less than " + secondNum + " and " + thirdNum)
    } else if(firstNum && secondNum < thirdNum) {
     console.log(firstNum + " and " + secondNum + " is less than " + thirdNum )
    }
      return
    
  }
  
  max(38,228,888)
  
  // question 3
  var findVowel = function(letter) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for(var i = 0; i < vowels.length; i++){
      if(letter === vowels[i]){
        return true;
      } 
        return false;
      }
    }
  
  console.log(findVowel('a'))
  
  // question 4 
    if (sumOfArray = 7 + 2 + 6 + 4)
  console.log(sumOfArray)
  
    
   if (multiplyArray = 1 * 9 * 6 * 4)
     console.log(multiplyArray)
  
  // question 5
  var numberOfArguments = function(){
    return arguments.length
  }
  
  // question 6
  const reverseString = "euris";
  
   const reverseStr = reverseString.split('')
  
  console.log(reverseStr.reverse())
  
  // question 7 
  function findLongestWord (arr) {
    longest = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > longest) {
        longest = arr[i].length;
      }
    }
    return longest;
  }
  
  
  
  // question 8
  
  function filterLongWords (arr,num) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].length > num){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }