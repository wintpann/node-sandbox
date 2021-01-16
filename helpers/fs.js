'use strict';

const path = require('path');
const fs = require('fs');

const resolvePath = (...args) => path.resolve(...args);

const readDir = (...args) => {
  const readPath = resolvePath(...args);
  const dir = fs.readdirSync(readPath);
  return dir;
};

const readFile = (encoding = null, ...args) => {
  const readPath = resolvePath(...args);
  const file = fs.readFileSync(readPath, encoding);
  return file;
};

const readText = readFile.bind(null, 'utf-8');

const writeFile = (path, fileName, ext, data) => {
  const fileFullPath = `${path}/${fileName}.${ext}`;
  fs.writeFileSync(fileFullPath, data);
};

module.exports = {
  resolvePath,
  readDir,
  readFile,
  readText,
  writeFile
};
