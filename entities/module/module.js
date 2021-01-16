'use strict';

const BaseEntity = require('../base/baseEntity');
const ModuleTemplate = require('../template/moduleTemplate');
const SectionTemplate = require('../template/sectionTemplate');
const { MODULES_DIR } = require('../../config/constants');
const runModuleConfig = require('../../config/run-module');
const {
  divideModule,
  divideSection,
  emptyLine
} = require('../../helpers/output');

class Module extends BaseEntity {
  constructor() {
    super();
  }

  _initEntity() {
    this._entityName = 'Module';
    this._entityDir = MODULES_DIR;
    this._runModuleConfig = runModuleConfig;
  }

  require(moduleName) {
    return this._require(moduleName);
  }

  getAvailable() {
    return this._getAvailable();
  }

  create(moduleName, sectionNames) {
    const sectionsData = SectionTemplate.create(sectionNames);
    const moduleData = ModuleTemplate.create(sectionsData);
    this._save(moduleName, moduleData);
  }

  run(moduleName) {
    const moduleRunner = this.require(moduleName);
    const moduleObj = moduleRunner(this._runModuleConfig);
    return moduleObj;
  }

  exec(moduleObj, moduleName, sectionNames) {
    divideModule(moduleName);
    emptyLine();

    let sections = Object.keys(moduleObj);
    if (sectionNames.length) {
      sections = sections.filter(section => sectionNames.includes(section));
    }

    sections.forEach(section => {
      divideSection(moduleName, section);
      moduleObj[section]();
      emptyLine();
    });
  }

  start(moduleName, ...sectionNames) {
    const moduleObj = this.run(moduleName);
    this.exec(moduleObj, moduleName, sectionNames);
  }

}

module.exports = new Module();
