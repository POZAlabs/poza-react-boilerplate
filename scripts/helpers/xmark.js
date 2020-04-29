/* eslint-disable @typescript-eslint/explicit-function-return-type */
const chalk = require("chalk");

/**
 * Adds mark cross symbol
 */
function addXMark(callback) {
  process.stdout.write(chalk.red(" ✘"));
  if (callback) callback();
}

module.exports = addXMark;
