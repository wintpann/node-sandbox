'use strict';

const AbstractTemplate = require('./abstractTemplate');

class SectionTemplate extends AbstractTemplate {
  constructor() {
    super();
    this._template = this._readAsText('section.template');
  }

  create(sectionNames) {
    const sections = new Set(sectionNames);
    if (!sections.size) {
      sections.add('main');
    }
    const sectionTemplates = Array.from(sections).map(sectionName => {
      const section = this._template.replace('$SECTION_NAME$', `'${sectionName}'`);
      return section;
    }).join(', \n');

    return sectionTemplates;
  }
}

module.exports = new SectionTemplate();
