'use strict';

const { SOURCE_PATH } = require('../config/constants');
const File = require('./file');
const Template = require('./template');

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
  create(sectionNames) {
    const sections = new Set(sectionNames);

    if (!sections.size) {
      sections.add('main');
    }

    const newModule = Template.createModule(Array.from(sections));
    return newModule;
  }
  save(moduleName, newModule) {
    File.writeFile(SOURCE_PATH, moduleName, 'js', newModule);
  }
}

module.exports = new Module();
