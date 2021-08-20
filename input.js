let connection; 

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */


const setupInput = function(conn) {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function(key) {

    switch (key) {
      case '\u0003':
        process.exit();
        break;
      case '1':
        connection.write("Say: Hello");
        break;
      case '2':
        connection.write("Say: Hi");
        break;
      case '3':
        connection.write("Say: Away?");
        break;
      case '4':
        connection.write("Say: No");
        break;
      case '5':
        connection.write("Say: Yeaha");
        break;
      case 'w':
        connection.write("Move: up");
        break;
      case 'a':
        connection.write("Move: left");
        break;
      case 's':
        connection.write("Move: down");
        break;
      case 'd':
        connection.write("Move: right");
        break;
      default:
        break;
    }
  }

  stdin.on("data", handleUserInput);

  return stdin;
}

module.exports = { setupInput };