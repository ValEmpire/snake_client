// play.js
const { connect } = require('./client');
const { setupInput } = require('./input');

const startGame = () => {

  console.log('Creating connection...')
  
  // this will make the socket available to setupInput
  setupInput(connect);
}

// Start game
startGame();