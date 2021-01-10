'use strict';

const path = require('path');
const fs = require('fs');

class File {
  resolvePath(...args) {
    return path.resolve(...args);
  }
  readDir(...args) {
    const readPath = this.resolvePath(...args);
    return fs.readdirSync(readPath);
  }
}

module.exports = new File();
