/**
 * Use Mocha verify the programs
 */

const {deepEqual} = require('assert');
const {readdirSync, existsSync} = require('fs');
const {join} = require('path');

const {problemDir} = require('../config');

const problems = readdirSync(problemDir);

problems.filter((name) => name.match(/^\d{3}\./)).forEach((problemsDirName) => {
  const problemDirPath = join(problemDir, problemsDirName);
  const testCasesPath = join(problemDirPath, 'test.js');
  const programPath = join(problemDirPath, 'index.js');

  if (!existsSync(testCasesPath)) return;

  const testCases = require(testCasesPath);
  const program = require(programPath);

  describe(problemsDirName, () => {
    testCases.forEach((testCase, idx) => {
      it(`Case #${idx + 1}`, () => {
        const {input, output} = testCase;
        deepEqual(program(...input), output);
      });
    });
  });
});
