'use strict';

const {
  divideModule,
  divideSection,
  emptyLine,
} = require('./common');

module.exports = (mod, moduleName, sectionName) => {
  divideModule(moduleName);
  emptyLine();
  if (sectionName) {
    divideSection(moduleName, sectionName);
    mod[sectionName]();
  } else {
    const sections = Object.keys(mod);
    sections.forEach(section => {
      divideSection(moduleName, section);
      mod[section]();
    });
  }
};
