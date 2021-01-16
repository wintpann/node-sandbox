'use strict';

const { TEMPLATE_DIR } = require('../../config/constants');
const BaseEntity = require('../base/baseEntity');

class AbstractTemplate extends BaseEntity {
  constructor() {
    super();
  }

  _initEntity() {
    this._entityDir = TEMPLATE_DIR;
    this._entityName = 'Template';
  }
}

module.exports = AbstractTemplate;
