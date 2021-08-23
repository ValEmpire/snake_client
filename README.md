# Snake Multiplayer

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, or bumping other snakes, upon which it dies.

This is simply a multiplayer take on the genre.

## Getting Started

```javascript
  git clone git@github.com:ValEmpire/snake_multiplayer.git

  //To start the server from snake_multiplayer directory
  cd server
  npm install
  npm run play

  //To start the server from snake_multiplayer directory
  cd client
  node play
  //set your name
  //you can move the snake by pressing wasd keys
  //you can send messages by pressing 0 - 9 keys
```
- Run the development snake client using the `node play.js` command.

## Acknowledgements
This game was not built from scratch. It was inspired and started from snek [(blog post)](https://www.taniarascia.com/snake-game-in-javascript/). Tania Rascia is the original author.

## Added Features to Server
- Broadcast message with the name of the newly connected player to other players
- Display number of connected players
- Display the names and scores of connected players 
- Display the name of player with the highest score
- Fixed bug (if two snakes collided heads on, no matter who caused the collision, the player who connected last or have the higher index in Snakes array died) this is because of checkPlayerHits() that loops if snakes head is in the same coordinates of other snakes. This is an easy fix by moving the checkPlayerHits() from Snake tick() method to Snake move() method, this way checkPlayerHits() will only invoke when the snake moves and not running continuously as server goes on and to get and kill the snake who caused the collision. BUT I think it makes more sense to kill all SNAKES who collided heads on and return message to the client.
- ...restIsTheSame

## Client Features
- Players can manually set their names before starting the game
- Players recieves messages from the server
- Players can change the maximum length of name by configuring PLAYER_NAME_LENGTH inside the constant.js file
- Players can also change the MESSAGES array inside constant.js file and add up to 10 message elements this will be iterate and assign index to keys
- Players can change GAME_STARTING_IN_MILLISECONDS this is to setTimeout time before game starts

## Final Product

![Final Product](https://raw.githubusercontent.com/ValEmpire/files/main/zoom_0.gif "Final Product")

