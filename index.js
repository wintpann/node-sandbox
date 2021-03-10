#! /usr/bin/env node

// eslint-disable-next-line strict
const path = require('path');
const projectDir = path.resolve(__dirname, '..', '..');
global.projectDir = projectDir;

const start = require('./start');
const create = require('./create');
const { COLORS } = require('./config/output');

const commands = { start, create };

const [,, command = '', moduleName, ...sectionNames] = process.argv;
const noSuchCommand = command !== 'start' && command !== 'create';
if (noSuchCommand) {
  console.log(
    'No such command',
    `${COLORS.RED}${command}${COLORS.WHITE}`,
    '\nUse one of the following:'
  );
  console.log(
    `${COLORS.GREEN}npx nd create`,
    `${COLORS.YELLOW}moduleName sectionName1 sectionNameN${COLORS.WHITE}`,
  );
  console.log(
    `${COLORS.GREEN}npx nd start`,
    `${COLORS.YELLOW}moduleName sectionName1 sectionNameN${COLORS.WHITE}`,
  );
  process.exit(1);
}

commands[command](moduleName, ...sectionNames);
