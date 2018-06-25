/**
 * Global Configuration
 */

const {resolve, join} = require('path');

const rootDir = resolve(__dirname, '..');
const problemDir = join(rootDir, 'problems');
const outputDir = join(rootDir, 'output');

module.exports = {
  rootDir,
  problemDir,
  outputDir,
};
