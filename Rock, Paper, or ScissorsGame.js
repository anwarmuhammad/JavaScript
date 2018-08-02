let getUserChoice = userInput =>{
    userInput=userInput.toLowerCase();
   if(userInput==='rock'||userInput==='paper'||userInput==='scissors'||userInput=='bomb'){
     return userInput;
   } else {
             console.log('Invalid Choice');
             }
 };
 let getComputerChoice=()=>{
   let randomNumber=Math.floor(Math.random()*3);
   switch(randomNumber){
     case 0:
       return 'rock';
       break;
       case 1:
       return 'papaer';
       break;
       case 2:
       return 'scissors';
       break;
        default:
       return 'Invalid';
       break;
       
       
          }
 };
 let determineWinner =(userChoice,computerChoice)=>{
   if(userChoice==='bomb'){
      return 'You win with this Bomb!';
      }
   if(userChoice===computerChoice){
      return 'Game is Tie!!';
      } 
   if(userChoice==='rock'){
      if(computerChoice==='paper'){
         return 'Computer Win';
         } else {
           return 'You Win!';
         }
      }
   if(userChoice==='paper'){
      if(computerChoice==='scissors'){
         return 'Computer Win';
         } else {
          return 'You Win!';
         }
      }
   if(userChoice==='scissors'){
      if(computerChoice==='rock'){
         return 'Computer Win';
         } else {
           return 'You Win!';
         }
      }
 };
 
 function playGame(){
  
   let userChoice=getUserChoice('rock');
   console.log(`You throw : ${userChoice}`);
   let computerChoice=getComputerChoice();
   console.log(`Computer throw : ${computerChoice}`);
   console.log(determineWinner(userChoice,computerChoice));
      
 }
 
 playGame();
 
 