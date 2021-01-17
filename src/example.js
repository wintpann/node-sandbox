'use strict';
// eslint-disable-next-line no-unused-vars
const { white, green, yellow, black, red, blue, divide } = global.moduleHelpers;

module.exports = {
  'section-example-1': () => {
    const instruction = 'execute your code here';
    white({ instruction });
    green('write logs in different colors');
    yellow('create as many sections as you need');
    black('section is just an object value (function to be executed)');
    red('object key used to determine different code sections');
    blue('comment here');
    divide('divide blocks to separate code in any section');
  },
  'my-custom-section': () => {
    green('separate module code to any sections as you want');
  }
};
