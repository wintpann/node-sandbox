'use strict';

const Module = require('./helpers/module');
const runModuleConfig = require('./config/run-module');
const validateStartParams = require('./helpers/validate-start-params');
const execModule = require('./helpers/execute-module');

const [,, moduleName, ...sectionNames] = process.argv;
validateStartParams(moduleName, ...sectionNames);

const moduleFile = Module.require(moduleName);

const moduleObj = moduleFile(runModuleConfig);
execModule(moduleObj, moduleName, ...sectionNames);
