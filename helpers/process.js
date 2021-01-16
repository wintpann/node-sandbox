'use strict';

const { red } = require('./output');

const fatalExit = (...data) => {
  red(...data);
  process.exit(1);
};


module.exports = {
  fatalExit
};
