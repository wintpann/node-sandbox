'use strict';

const File = require('./file');
const { TEMPLATE_PATH } = require('../config/constants');
const { fatalExit } = require('./process');

class Template {
  constructor() {
    this._initTemplates();
  }

  _initTemplates() {
    try {
      this._moduleTemplate = File.readText(TEMPLATE_PATH, 'module.template');
      this._sectionTemplate = File.readText(TEMPLATE_PATH, 'section.template');
    } catch (e) {
      fatalExit('Template files broken');
    }
  }

  createSections(sectionNames) {
    const sections = sectionNames.map(sectionName => {
      const section = this._sectionTemplate.replace('$SECTION_NAME$', sectionName);
      return section;
    }).join(',\n');

    return sections;
  }

  createModule(sectionNames) {
    const sections = this.createSections(sectionNames);
    const newModule = this._moduleTemplate.replace('$SECTIONS$', sections);
    return newModule;
  }
}

module.exports = new Template();
