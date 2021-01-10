'use strict';

const Module = require('./module');
const { fatalExit } = require('./process');

module.exports = moduleName => {
  const availableModules = Module.getAvailable();

  if (availableModules.includes(moduleName)) {
    fatalExit(`Module "${moduleName}" already exists`);
  }
};
