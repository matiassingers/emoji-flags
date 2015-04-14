#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var emojiFlags = require('./');
var argv = process.argv.slice(2);

var columnify = require('columnify');

function help() {
  console.log([
    '',
      '  ' + pkg.description,
    '',
    '  Example',
    '    emoji-flags gb',
    '',
    '    emoji-flags dk --verbose',
    '',
    '    emoji-flags',
    '    => returns the entire dataset',
    ''
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

// list all countries
if (!argv.length) {
  var columns = columnify(emojiFlags.data, {
    columns: ['code', 'name', 'emoji'],
    showHeaders: false
  });

  console.log(columns)
  return;
}


var country = emojiFlags.countryCode(argv[0]);

if (argv.indexOf('--verbose') !== -1) {
  console.log(JSON.stringify(country, null, 4));
  return;
}

console.log(country.emoji);
