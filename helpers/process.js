'use strict';

const { red } = require('./output');

const fatalExit = message => {
  red(message);
  process.exit(1);
};


module.exports = {
  fatalExit
};
