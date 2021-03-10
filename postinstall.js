'use strict';

const path = require('path');
const { mkDirIfNotExists } = require('./helpers/fs');
const { COLORS } = require('./config/output');
const projectDir = path.resolve(__dirname, '..', '..');

mkDirIfNotExists(projectDir);
console.log(
  `${COLORS.YELLOW}'/src'${COLORS.GREEN} folder was created!`,
  `\n${COLORS.WHITE}Create your first module with:`,
  `\n${COLORS.BLUE}npx nd create my-first-module${COLORS.WHITE}`
);
