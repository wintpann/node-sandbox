'use strict';

const { fatalExit } = require('../../helpers/process');
const {
  resolvePath,
  readDir,
  readFile,
  readText,
  writeFile
} = require('../../helpers/fs');

class BaseEntity {
  constructor() {
    this._initConstants();
    this._initEntity();
    this._validateEntity();
  }

  _initConstants() {
    this._entityName = '';
    this._entityDir = '';
  }

  _require(fileName) {
    try {
      const entityPath = resolvePath(this._entityDir, fileName);
      return require(entityPath);
    } catch (e) {
      this._readDataError(e);
    }
  }

  _getAvailable() {
    try {
      const sources = readDir(this._entityDir);
      const onlyJS = sources.filter(source => source.endsWith('.js'));
      const entities = onlyJS.map(module => module.replace('.js', ''));
      return entities;
    } catch (e) {
      this._readDataError(e);
    }
  }

  _save(fileName, data) {
    try {
      writeFile(this._entityDir, fileName, 'js', data);
    } catch (e) {
      this._writeDataError(e);
    }
  }

  _read(fileName) {
    try {
      return readFile(null, this._entityDir, fileName);
    } catch (e) {
      this._readDataError(e);
    }
  }

  _readAsText(fileName) {
    try {
      return readText(this._entityDir, fileName);
    } catch (e) {
      this._readDataError(e);
    }
  }

  _validateEntity() {
    const errors = [];
    if (!this._entityName || typeof this._entityName !== 'string') {
      errors.push('Entity name should be a string');
    }
    if (!this._entityDir || typeof this._entityDir !== 'string') {
      errors.push('Entity directory should be a string');
    }
    if (errors.length) {
      const errorMsg = errors.join(', ');
      this._error(errorMsg);
    }
  }

  _error(...data) {
    fatalExit(...data);
  }

  _readDataError(e) {
    fatalExit(
      `${this._entityName} file is possibly broken, could not read`,
      { message: e.message, stack: e.stack }
    );
  }

  _writeDataError(e) {
    fatalExit(
      'Could not write file',
      { message: e.message, stack: e.stack }
    );
  }
}

module.exports = BaseEntity;
