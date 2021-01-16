'use strict';

const Module = require('./entities/module/module');
const validateStartParams = require('./validate/start');

const [,, moduleName, ...sectionNames] = process.argv;
validateStartParams(moduleName, ...sectionNames);

Module.start(moduleName, ...sectionNames);
