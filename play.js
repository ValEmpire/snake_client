// play.js
const { connect } = require('./client');
const { setupInput } = require('./input');

setupInput();

console.log('Connecting ...');

connect();