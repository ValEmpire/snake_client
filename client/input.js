const {
  PLAYER_NAME_LENGTH,
  MESSAGES,
  GAME_STARTING_IN_MILLISECONDS
} = require('./constants');

let socket; 

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function(conn) {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  console.log(`Name your snake. Max of ${PLAYER_NAME_LENGTH} characters.`)

  // initialize start to false as we have to create snake name
  let start = false;

  // name to empty string
  let name = '';

  const handleUserInput = async function(key) {

    // top most to exit if ctrl c is pressed
    if(key == '\u0003'){
      process.exit();
    }

    // If game is not started yet
    // Set name of the snake
    if(start === false){
      switch (key) {
        case '\u000d': // enter key

          // only console log PLAYER_NAME_LENGTH characters
          console.log(`Your snake name is: ${name.substring(0,PLAYER_NAME_LENGTH)}`);

          console.log(`Starting in ${GAME_STARTING_IN_MILLISECONDS} milliseconds...`);

          console.log('Best of luck...')

          // set the start to waiting while it connects to server
          // this will prevent the app from connecting to server multiple times
          start = "";

          // create socket with name length
          socket = await conn(name.substr(0, PLAYER_NAME_LENGTH));

          // after connecting to the server change start to true
          start = true;

          break;
        
        default: //any other keys

          // pushing keys to name
          name += key;

          // name can only have PLAYER_NAME_LENGTH characters
          if(name.length <= PLAYER_NAME_LENGTH) process.stdout.write(`${key}`);

          break;
      }

      // if the game started
    }else if(start === true){

      // Set the message to say from MESSAGES constant according to key
      for(let [i, MESSAGE, ] of MESSAGES.entries()){
        if(key == i){
          socket.write(`Say: ${MESSAGE}`)
        }
      }

      // set the snake movements
      switch (key) {
        case 'w':
          socket.write("Move: up");
          break;
        case 'a':
          socket.write("Move: left");
          break;
        case 's':
          socket.write("Move: down");
          break;
        case 'd':
          socket.write("Move: right");
          break;
        default:
          break;
      }

      // while waiting to connect to the server
    }else{
      return;
    }
  }

  stdin.on("data", handleUserInput);

  return stdin;
}

module.exports = { setupInput };