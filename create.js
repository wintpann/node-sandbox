'use strict';

const Module = require('./helpers/module');
const validateCreateParams = require('./helpers/validate-create-params');
const { green } = require('./helpers/output');

const [,, moduleName, ...sectionNames] = process.argv;
validateCreateParams(moduleName);

const newModule = Module.create(sectionNames);
Module.save(moduleName, newModule);

green('New module was created');
