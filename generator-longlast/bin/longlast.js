#!/usr/bin/env node

global.log = require('./lib/logger');
global.logVerbose = true;

require('./caller/index')