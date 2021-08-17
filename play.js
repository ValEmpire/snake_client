// play.js
const { connect } = require('./client');
const { setupInput } = require('./input');

setupInput(connect());

console.log('Connecting ...');