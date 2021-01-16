'use strict';

const AbstractTemplate = require('./abstractTemplate');

class ModuleTemplate extends AbstractTemplate {
  constructor() {
    super();
    this._template = this._readAsText('module.template');
  }

  create(sections) {
    const newModule = this._template.replace('$SECTIONS$', sections);
    return newModule;
  }
}

module.exports = new ModuleTemplate();
