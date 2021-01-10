'use strict';

const {
  divideModule,
  divideSection,
  emptyLine,
} = require('./output');

module.exports = (moduleObj, moduleName, ...sectionNames) => {
  divideModule(moduleName);
  emptyLine();

  let sections = Object.keys(moduleObj);
  if (sectionNames.length) {
    sections = sections.filter(section => sectionNames.includes(section));
  }

  sections.forEach(section => {
    divideSection(moduleName, section);
    moduleObj[section]();
    emptyLine();
  });
};
