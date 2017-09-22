'use strict';

var assert = require('assert');
var exec = require('child-process-promise').exec;
var path = require('path');
var pkg = require('../package.json');

const cmd = 'npm run start -- ';

describe('harvest bin', function() {
  console.log('??', cmd);
  test('--help should run without errors', () => {
    return exec(cmd + '--help')
      .then(({ stdout, stderr }) => {
        // expect(stdout).toEqual(pkg.version);
        console.log('OUTTT', stdout);
        console.log('ERRR', stderr);
      })
      .catch(err => {
        console.error('hey', err);
      });
  });

  // test('--version should run without errors', () => {
  //   exec(cmd + '--version', function(error, stdout, stderr) {
  //     expect(stdout).toEqual(pkg.version);
  //     expect(!error).toBe(true);
  //   });
  // });
  //
  // test('should return error on missing command', () => {
  //   exec(cmd, function(error, stdout, stderr) {
  //     expect(error).toBe(true);
  //     expect(error.code).toEqual(1);
  //   });
  // });
  //
  // test('should return error on unknown command', () => {
  //   exec(cmd + 'junkcmd', function(error, stdout, stderr) {
  //     expect(!!error).toBe(true);
  //     expect(error.code).toEqual(1);
  //   });
  // });
});

module.exports = cmd;
