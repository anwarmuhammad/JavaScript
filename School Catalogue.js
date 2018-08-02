class School{
    constructor(name,level,numberOfStudents){
      this._name=name;
      this._level=level;
      this._numberOfStudents=numberOfStudents;
    }
    get name(){
      return this._name;
    }
     get level(){
      return this._level;
    }
     get numberOfStudents(){
      return this._numberOfStudents;
    }
    set numberOfStudents(numberOfStudents){
      if( typeof _numberOfStudents ==='number'){   
             this._numberOfStudents=_numberOfStudents;
        
         } else {
           console.log('Invalid Input');
         }
     
    }
    quickFacts(){
     
     console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    
    pickSubstituteTeacher(substituteTeachers){
    let  teacherArray=substituteTeachers;
      
      let
      teacherIndex=Math.floor(Math.random()*teacherArray.length-1);
      return teacherArray[teacherIndex];
    }
  }
  class PrimarySchool extends School{
    constructor(name,numberOfStudents,pickupPolicy){
      super(name,'Primary',numberOfStudents);
      this._pickupPolicy=pickupPolicy;
    
    }
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  class MiddleSchool extends School{
    constructor(name){
      super(name,'Middle');
    }
  }
  class HighSchool extends School{
    constructor(name,numberOfStudents,teamArray){
      super(name,numberOfStudents);
      this._sportsTeams=teamArray;
      
    }
    get sportsTeams(){
      return this._sportsTeams;
    }
  }
  const lorraineHansbury=new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  lorraineHansbury.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  const alSmith=new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams);
  const school=new School('r','p','12');
  console.log(school.numberOfStudents);