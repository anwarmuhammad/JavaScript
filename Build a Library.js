class Media{
    constructor(title){
      this._title=title;
      this._isCheckedOut=false;
      this._ratings=[]
    }
    
    get title(){
      return  this._title;
    }
    get isCheckedOut(){
      return  this._isCheckedOut;
    }
   
    get ratings(){
      return  this._ratings;
    }
     toggleCheckOutStatus(status){
      if(this._isCheckedOut){
         return this._isCheckedOut=false;
         } else {
           return this._isCheckedOut=true;
         }
    }
    getAverageRating(){
      const sum=this.ratings.reduce((accumulator,currentValue)=>{
         return accumulator+currentValue;
      },0);
       return Math.floor(sum/this.ratings.length);
    }
    
    addRating(rating){
      if(rating<=5){
        this._ratings.push(rating)
      } else {
        console.log('Ratings Must be between 1 And 5');
      }
      
    }
  }
  class Book extends Media{
    constructor(author,title,pages){
      super(title);
      this._author=author;
      this._pages=pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  class Movie extends Media{
    constructor(director,title,runTime){
      super(title);
      this._director=director;
      this._runTime=runTime;
    }
    get director(){
      return  this._director;
    }
    get runTime(){
      return  this._runTime;
    }
  }
  const media=new Media('ami','tumi');
  const historyOfEverything =new Book('Bill Bryson','A Short History of Nearly Everything',544);
  historyOfEverything.toggleCheckOutStatus();
  
  console.log(historyOfEverything.getAverageRating());
  const speed=new Movie('Jan de Bont','Speed',116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  
  
  
  
  