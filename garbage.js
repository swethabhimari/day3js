let game = {
    name: 'cricket',
  };
   
  let boy = {
    name: 'Ram',
  }
   console.log(game);
  game.boy = boy;
  boy.game = game;
   
  boy = null;
  