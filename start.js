'use strict';

const Module = require('./entities/module/module');
const validateStartParams = require('./validate/start');

module.exports = (moduleName, sectionNames) => {
  validateStartParams(moduleName, ...sectionNames);

  Module.start(moduleName, ...sectionNames);
};
