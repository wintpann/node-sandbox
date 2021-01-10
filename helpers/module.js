'use strict';

const { SOURCE_PATH } = require('../config/constants');
const File = require('./file');

class Module {
  require(moduleName) {
    const modulePath = File.resolvePath(SOURCE_PATH, moduleName);
    return require(modulePath);
  }
  getAvailable() {
    const sources = File.readDir(SOURCE_PATH);
    const onlyJS = sources.filter(source => source.endsWith('.js'));
    const modules = onlyJS.map(module => module.replace('.js', ''));
    return modules;
  }
}

module.exports = new Module();
