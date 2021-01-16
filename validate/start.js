'use strict';

const Module = require('../entities/module/module');
const { fatalExit } = require('../helpers/process');

module.exports = (moduleName, ...sectionNames) => {
  const availableModules = Module.getAvailable();

  const availableModulesMessage = availableModules.length ?
    `Available module/s: ~${availableModules.join(', ')}~` :
    'No available modules';

  if (!moduleName) {
    fatalExit(
      `No module specified. ${availableModulesMessage}`
    );
  }

  const noModule = !availableModules.includes(moduleName);
  if (noModule) {
    fatalExit(
      `No such module found "${moduleName}". ${availableModulesMessage}`
    );
  }

  const moduleFile = Module.require(moduleName);

  const wrongTypeOfModule =
    typeof moduleFile !== 'function' ||
    typeof Module.run(moduleName) !== 'object';

  if (wrongTypeOfModule) {
    fatalExit(
      'Wrong type of module'
    );
  }

  const moduleObject = Module.run(moduleName);
  const moduleSections = Object.keys(moduleObject);
  const wrongModuleSections = moduleSections.filter(section => {
    const notFunc = typeof moduleObject[section] !== 'function';
    return notFunc;
  });

  if (wrongModuleSections.length) {
    fatalExit('Wrong type of module sections');
  }

  const noSpecifiedSections = sectionNames.some(sectionName => {
    const noSection = moduleSections.includes(sectionName);
    return !noSection;
  });

  if (sectionNames && noSpecifiedSections) {
    fatalExit(`Section/s ~${sectionNames.join(', ')}~ not found of ~${moduleSections.join(', ')}~`);
  }
};
