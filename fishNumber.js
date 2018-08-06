

function calculateFishNumber(num) {
    let numCube=num*num*num;
    let numArray = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            numArray.push(i);
        }
    }
    let divisorCube= numArray.reduce((a,b)=>a*b);
    if(numCube==divisorCube){
       return `${num} is a Fish Number`;
    } else {
        return `${num} is not a Fish Number`;
    }
    
}

console.log(calculateFishNumber(20));