'use strict';

const Module = require('../entities/module/module');
const { fatalExit } = require('../helpers/process');

module.exports = moduleName => {
  const availableModules = Module.getAvailable();

  if (availableModules.includes(moduleName)) {
    fatalExit(`Module "${moduleName}" already exists`);
  }
};
