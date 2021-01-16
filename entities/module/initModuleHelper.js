'use strict';

const {
  green,
  yellow,
  white,
  black,
  red,
  blue,
  divideLine,
} = require('../../helpers/output');

const moduleHelpers = {
  green,
  yellow,
  white,
  black,
  red,
  blue,
  divide: divideLine
};

const initModuleHelpers = () => {
  global.moduleHelpers = {};

  Object.keys(moduleHelpers).forEach(key => {
    global.moduleHelpers[key] = moduleHelpers[key];
  });
};

module.exports = initModuleHelpers;
