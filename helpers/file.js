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
  readText(...args) {
    const readPath = this.resolvePath(...args);
    return fs.readFileSync(readPath, 'utf8');
  }
  writeFile(path, fileName, ext, data) {
    fs.writeFileSync(`${path}/${fileName}.${ext}`, data);
  }
}

module.exports = new File();
