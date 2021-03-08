'use strict';

const File = require('../helpers/fs');

const MODULES_DIR = File.resolvePath(global.projectDir, 'src');
const TEMPLATE_DIR = File.resolvePath(__dirname, '..', 'templates');

module.exports = {
  MODULES_DIR,
  TEMPLATE_DIR
};
