module.exports = function(program) {
  program
    .command('multi')
    .version('0.0.0')
    .description('Does a thing!!!')
    .action(function(one) {
      console.log('does it');
    });
};
