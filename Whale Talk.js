let input ="turpentine and turtles";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray=[];
for(let inputIndex=0;inputIndex<input.length;inputIndex++){
  for(let vowelsIndex=0;vowelsIndex<vowels.length;vowelsIndex++){
      if(input[inputIndex]===vowels[vowelsIndex]){
           // console.log(input[inputIndex]);
             resultArray.push(input[inputIndex]);
         }
     
  }
  if(input[inputIndex]==='e'){
           // console.log(input[inputIndex]);
             resultArray.push(input[inputIndex]);
         }
   if(input[inputIndex]==='u'){
           // console.log(input[inputIndex]);
             resultArray.push(input[inputIndex]);
         }
  
}
console.log(resultArray.join(" ").toUpperCase());