'use strict';
const util = require('util');
const {
  COLORS,
  LINE_DIVIDER,
  SECTION_DIVIDER,
  MODULE_DIVIDER,
} = require('../config/output');

const green = (...args) => console.log(COLORS.GREEN, ...args);
const yellow = (...args) => console.log(COLORS.YELLOW, ...args);
const white = (...args) => console.log(COLORS.WHITE, ...args);
const black = (...args) => console.log(COLORS.BLACK, ...args);
const red = (...args) => console.log(COLORS.RED, ...args);
const blue = (...args) => console.log(COLORS.BLUE, ...args);

const divideLine = (text = '') => {
  const output = `${LINE_DIVIDER} ${text.toLowerCase()} ${LINE_DIVIDER}`;
  white(output);
};

const divideSection = (modName, sectName) => {
  const output = `(${modName.toUpperCase()}/${sectName.toUpperCase()}) section ${SECTION_DIVIDER}`;
  yellow(output);
};

const divideModule = modName => {
  const output = `${MODULE_DIVIDER} (${modName.toUpperCase()}) module ${MODULE_DIVIDER}`;
  blue(output);
};

const depth = obj => util.inspect(obj, { showHidden: false, depth: null, colors: true });

const emptyLine = () => white('');

module.exports = {
  green,
  yellow,
  white,
  black,
  red,
  blue,
  divideLine,
  divideSection,
  divideModule,
  emptyLine,
  depth,
};
