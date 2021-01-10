'use strict';

const {
  COLOR,
  LINE_DIVIDER,
  SECTION_DIVIDER,
  MODULE_DIVIDER,
} = require('../config/output');

const curry = (fn, ...pars) => {
  const curried = (...args) => {
    if (fn.length > args.length) {
      const f = fn.bind(null, ...args);
      return curry(f);
    } else {
      return fn(...args);
    }
  };
  return pars.length ? curried(...pars) : curried;
};

const fancyLog = (color, text) => console.log(color, text);

const green = curry(fancyLog, COLOR.GREEN);
const yellow = curry(fancyLog, COLOR.YELLOW);
const white = curry(fancyLog, COLOR.WHITE);
const black = curry(fancyLog, COLOR.BLACK);
const red = curry(fancyLog, COLOR.RED);
const blue = curry(fancyLog, COLOR.BLUE);

const fatalExit = message => {
  red(message);
  process.exit(1);
};

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
  curry,
  divideLine,
  divideSection,
  divideModule,
  emptyLine,
  green,
  yellow,
  white,
  black,
  red,
  blue,
  fatalExit,
};
