const readline = require("node:readline");

const { stringToGame }  = require('./utils.js');
const { scoreHand } = require('./score.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.question("Enter your hand:", (gameString) => {
    try { 
      const [hand, flop] = stringToGame(gameString);
      const score = scoreHand(hand, flop);
      console.log(gameString, '\t:', score);
    } catch (e) {
      console.error('Invalid hand input.', e)
    } 
    rl.close();
  });
  