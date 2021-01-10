'use strict';

const path = require('path');
const fs = require('fs');

const { fatalExit } = require('./common');
const { SOURCE_PATH } = require('../config/constants');
const runModuleConfig = require('../config/run-module');

module.exports = (moduleName, sectionName) => {
  if (!moduleName) {
    fatalExit('No module specified');
  }

  const modules = fs.readdirSync(SOURCE_PATH).map(mod => mod.replace('.js', ''));
  const noModule = !modules.includes(moduleName);

  if (noModule) {
    fatalExit(`No such module found "${moduleName}" Available modules: <${modules.join(',')}>`);
  }

  const mod = require(path.resolve(SOURCE_PATH, moduleName));

  const wrongTypeOfModule = typeof mod !== 'function' || typeof mod(runModuleConfig) !== 'object';

  if (wrongTypeOfModule) {
    fatalExit('Wrong type of module');
  }

  const moduleSections = mod(runModuleConfig);
  const wrongModuleSections = Object.keys(moduleSections).filter(section => {
    const notFunc = typeof moduleSections[section] !== 'function';
    return notFunc;
  });

  if (wrongModuleSections.length) {
    fatalExit(`Wrong type of module sections: <${wrongModuleSections.join(',')}>`);
  }

  const noSuchSection = !Object.keys(moduleSections).includes(sectionName);
  if (sectionName && noSuchSection) {
    fatalExit(`Section "${sectionName}" not found from <${Object.keys(moduleSections).join(',')}>`);
  }
};
