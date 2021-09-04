function solution (input) {

  let result = []

  //remove all non-integers
  let onlyNumbersArray = input.split('').filter(char => /[0-9]/.test(char));

  //Check if the input contains any integers. Return error if not
  let arrayLength = onlyNumbersArray.length
  if (arrayLength === 0){
    return "The string provided does not contain any integers"
  }

  //recursion to output the variations
  let permutationsArray = permutations(onlyNumbersArray, arrayLength, result) 

  //remove deuplicates using a set
  let set = new Set();
  for(let i = 0; i < permutationsArray.length; i++)
      set.add(permutationsArray[i]);
  let noDuplicatesPermutationsArray = [...set];

  //Format the array of permutations into the desired string
  let outputString = ""
  for (let i=0; i<noDuplicatesPermutationsArray.length; i++){
    outputString += noDuplicatesPermutationsArray[i]
    if (i != noDuplicatesPermutationsArray.length -1){
      outputString += ","
    }
  }

  return outputString
}


function permutations(array, len, result){

  if (len == 1) { 
    result.push(array.join(""));
  }

  for (let i = 0; i < len; i++){
      permutations(array, len - 1, result);
      if (len % 2 == 1) {
          let temp = array[0];
          array[0] = array[len - 1];
          array[len - 1] = temp;
      } else {
          let temp = array[i];
          array[i] = array[len - 1];
          array[len - 1] = temp;
      }
  }
  return result;
}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236

//console.log(solution('A 3B2 C6D DDDDD        '));
//console.log(solution('233')); 
//console.log(solution('55555')); 
//console.log(solution("aa AADDD VV"))
//console.log(solution("1 1.1"))