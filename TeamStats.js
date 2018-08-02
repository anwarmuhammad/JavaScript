const team ={
    _players:[
      {
        firstName: 'Pablo',
        lastName:'Sanchez',
        age: 11
      },
      {
        firstName: 'Pablo2',
        lastName:'Sanchez2',
        age: 112
      },
      {
        firstName: 'Pablo3',
        lastName:'Sanchez3',
        age: 113
      },
    ],
    _games :[
      {
        opponent: 'Broncos', 
        teamPoints: 42, 
        opponentPoints: 27
      },
      {
        opponent: 'Broncos2', 
        teamPoints: 422, 
        opponentPoints: 272
      },
      {
        opponent: 'Broncos3', 
        teamPoints: 423, 
        opponentPoints: 273
      },
    ],
    get players(){
        return this._players;
    } ,
    get games(){
       return this._games;
    },
    addPlayer(firstName,lastName,age){
      const player={
       firstName:firstName,
       lastName:lastName,
       age:age
      };
      this.players.push(player);
    },
    addGame(opponent,teamPoints,opponentPoints){
      const game={
        opponent:opponent , 
        teamPoints:teamPoints, 
        opponentPoints:opponentPoints 
      };
      this.games.push(game);
    }
  };
  team.addPlayer('Steph', 'Curry', 28);
  console.log(team.players);
  team.addGame('ind', 12, 28);
  console.log(team.games);
  