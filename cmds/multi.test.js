var assert = require('assert');
var exec = require('child_process').exec;
var path = require('path');
var pkg = require('../package.json');

const cmd = 'npm run start multi';

describe('multi command', function() {
  test('--help should run without errors', () => {
    exec(cmd + '--help', function(error, stdout, stderr) {
      console.log(stdout);
      expect(!error).toBe(true);
    });
  });
});

module.exports = cmd;
