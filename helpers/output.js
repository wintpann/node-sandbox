'use strict';

const {
  COLORS,
  LINE_DIVIDER,
  SECTION_DIVIDER,
  MODULE_DIVIDER,
} = require('../config/output');

const log = (...args) => console.dir(args, { depth: null });

const green = (...args) => log(COLORS.GREEN, ...args);
const yellow = (...args) => log(COLORS.YELLOW, ...args);
const white = (...args) => log(COLORS.WHITE, ...args);
const black = (...args) => log(COLORS.BLACK, ...args);
const red = (...args) => log(COLORS.RED, ...args);
const blue = (...args) => log(COLORS.BLUE, ...args);

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
};
