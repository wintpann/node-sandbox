'use strict';

const {
  green,
  yellow,
  white,
  black,
  red,
  blue,
  divideLine,
  emptyLine,
  depth,
} = require('../../helpers/output');

const moduleHelpers = {
  green,
  yellow,
  white,
  black,
  red,
  blue,
  divide: divideLine,
  empty: emptyLine,
  depth,
};

const initModuleHelpers = () => {
  global.moduleHelpers = {};

  Object.keys(moduleHelpers).forEach(key => {
    global.moduleHelpers[key] = moduleHelpers[key];
  });
};

module.exports = initModuleHelpers;
