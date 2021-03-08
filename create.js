'use strict';

const Module = require('./entities/module/module');
const validateCreateParams = require('./validate/create');
const { green } = require('./helpers/output');

module.exports = (moduleName, ...sectionNames) => {
  validateCreateParams(moduleName);

  Module.create(moduleName, sectionNames);

  green('New module was created');
};
