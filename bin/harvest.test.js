/* global describe, it */
'use strict';

var assert = require('assert');
var exec = require('child_process').exec;
var path = require('path');
var pkg = require('../package.json');

describe('harvest bin', function() {
  var cmd = 'node ' + path.join(__dirname, '../bin/harvest.js') + ' ';

  test('--help should run without errors', () => {
    exec(cmd + '--help', function(error, stdout, stderr) {
      expect(!error).toBe(true);
    });
  });

  test('--version should run without errors', () => {
    exec(cmd + '--version', function(error, stdout, stderr) {
      expect(stdout).toEqual(pkg.version);
      expect(!error).toBe(true);
    });
  });

  test('should return error on missing command', () => {
    exec(cmd, function(error, stdout, stderr) {
      expect(error).toBe(true);
      expect(error.code).toEqual(1);
    });
  });

  test('should return error on unknown command', () => {
    exec(cmd + 'junkcmd', function(error, stdout, stderr) {
      expect(!!error).toBe(true);
      expect(error.code).toEqual(1);
    });
  });
});
