'use strict';

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

module.exports = {
  curry
};
