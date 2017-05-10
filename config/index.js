'use strict';

var defaultImport = 'dev';
var processEnv = process.NODE_ENV || defaultImport;
module.exports = require('./' + processEnv);