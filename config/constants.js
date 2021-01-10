'use strict';

const File = require('../helpers/file');

const SOURCE_PATH = File.resolvePath(__dirname, '..', 'src');
const TEMPLATE_PATH = File.resolvePath(__dirname, '..', 'templates');

module.exports = {
  SOURCE_PATH,
  TEMPLATE_PATH
};
