// play.js
const { connect } = require('./client');

const handleUserInput = function(data) {

  if (data === '\u0003') {
    process.exit();
  }

  console.log(data)
}

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  process.stdin.on("data", handleUserInput);

  return stdin;
}

setupInput();

console.log('Connecting ...');

connect();