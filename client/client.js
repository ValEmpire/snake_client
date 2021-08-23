const net = require('net');
const { IP, PORT, GAME_STARTING_IN_MILLISECONDS } = require('./constants');

// Wait for 2000 milliseconds
const createConnection = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(socket = net.createConnection(
      {
        host: IP,
        port: PORT,
      },
    ));
  }, GAME_STARTING_IN_MILLISECONDS)
})

/**
 * Establishes connection with the game server
 */
const connect = async (name) => {

  // this connects to the server
  socket = await createConnection();

  // interpret incoming data as text
  socket.setEncoding('utf8'); 

  // this is just listener
  socket.on('connect', () => {
    socket.write(`Name: ${name.trim()}`);
    console.log('Start!');
  });

  // this is just listener
  socket.on('data', (m) => {
    console.log(m);
  });

  return socket;

}

module.exports = { connect };