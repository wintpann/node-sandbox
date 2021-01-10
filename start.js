'use strict';

const path = require('path');
const runModuleConfig = require('./config/run-module');
const validateArgs = require('./helpers/validate-args');
const execModule = require('./helpers/execute-module');
const {
  SOURCE_PATH
} = require('./config/constants');

const [,, moduleName, sectionName] = process.argv;
validateArgs(moduleName, sectionName);

const modulePath = path.resolve(SOURCE_PATH, moduleName);

const mod = require(modulePath)(runModuleConfig);
execModule(mod, moduleName, sectionName);
