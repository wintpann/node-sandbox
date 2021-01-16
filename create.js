'use strict';

const Module = require('./entities/module/module');
const validateCreateParams = require('./validate/create');
const { green } = require('./helpers/output');

const [,, moduleName, ...sectionNames] = process.argv;
validateCreateParams(moduleName);

Module.create(moduleName, sectionNames);

green('New module was created');
