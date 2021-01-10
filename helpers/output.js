'use strict';

const {
  COLORS,
  LINE_DIVIDER,
  SECTION_DIVIDER,
  MODULE_DIVIDER,
} = require('../config/output');
const { curry } = require('./common');

const fancyLog = (color, text) => console.log(color, text);

const green = curry(fancyLog, COLORS.GREEN);
const yellow = curry(fancyLog, COLORS.YELLOW);
const white = curry(fancyLog, COLORS.WHITE);
const black = curry(fancyLog, COLORS.BLACK);
const red = curry(fancyLog, COLORS.RED);
const blue = curry(fancyLog, COLORS.BLUE);

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
