
class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    get firstName(){
       return this.firstName;
    }
    set firstName(name){
        if(typeof name !== Number){
            this.firstName=name;
        } else {
            console.log('Wrong Input');
        }
     
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}
class Student extends Person {
    
      constructor(firstName,lastName, identification){
           super(firstName,lastName, identification);
           this.testScores=[100,50];
          
      }
   
    calculate(){
       let sum=this.testScores.reduce((a,b)=>a+b);
       console.log(sum);
       let avg=sum/this.testScores.length;
       console.log(avg);
        if(90<avg && avg<100){
             return "A+";
           }
         else if(80<=avg && avg<90){
             return "A";
           }
         else if(70<=avg && avg<80){
             return "A-";
           }
         else if(55<=avg && avg<70){
             return "B";
           }
         else if(40<=avg<55){
             return "B-";
           } else {
               return "Fail";
           }
       
       
        
       
    }
    
}


    let s = new Student('Anwar', 'Muhammad', 123);
    console.log(s.firstName="Ant");
    s.printPerson();
    s.calculate();
    console.log('Grade: ' + s.calculate())
