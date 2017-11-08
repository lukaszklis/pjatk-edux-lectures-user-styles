require('ts-node').register({
  fast: true,
  noProject: true
});

module.exports = require('./src/bootstrap.ts');
