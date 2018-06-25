/**
 * Use Google Closure Compiler Make Program Better
 */

const {readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync}
    = require('fs');
const {join} = require('path');
const compile = require('google-closure-compiler-js').compile;

const {problemDir, outputDir} = require('../config');

const problems = readdirSync(problemDir);

if (!existsSync(outputDir)) mkdirSync(outputDir);

problems.filter((name) => name.match(/^\d{3}\./)).forEach((problemsDirName) => {
  const problemDirPath = join(problemDir, problemsDirName);
  const programPath = join(problemDirPath, 'index.js');
  const answerPath = join(outputDir, `${problemsDirName}.js`);
  if (existsSync(programPath) && !existsSync(answerPath)) {
    const content = readFileSync(programPath, 'utf-8').toString();
    const contentRemoveExport = content.split('\n').
        filter((line) => !line.match(/^module.exports\s?=\s?\w+/)).join('\n');
    const out = compile({jsCode: [{src: contentRemoveExport}]});
    console.log(`${problemsDirName} compiled.`);
    writeFileSync(answerPath, out.compiledCode);
  }
});
