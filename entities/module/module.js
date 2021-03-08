'use strict';

const BaseEntity = require('../base/baseEntity');
const ModuleTemplate = require('../template/moduleTemplate');
const SectionTemplate = require('../template/sectionTemplate');
const { MODULES_DIR } = require('../../config/constants');
const {
  divideModule,
  divideSection,
  emptyLine
} = require('../../helpers/output');
const { mkDirIfNotExists } = require('../../helpers/fs');
const initModuleHelpers = require('./initModuleHelper');

class Module extends BaseEntity {
  constructor() {
    super();
    initModuleHelpers();
  }

  _initEntity() {
    this._entityName = 'Module';
    this._entityDir = MODULES_DIR;

    mkDirIfNotExists(MODULES_DIR);
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
    const moduleObj = this.require(moduleName);
    this.exec(moduleObj, moduleName, sectionNames);
  }

}

module.exports = new Module();
