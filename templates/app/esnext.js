// Just hacked the babel, tranform the `trek` module automagically.

import fs from 'fs';
import path from 'path';

var babelrc = {};

try {
  babelrc = JSON.parse(fs.readFileSync(path.join(__dirname, '.babelrc')));
} catch(e) {}

var regexp = [
  'lib',
  'test',
  'node_modules/trek/lib'
].map((i) => {
    return '^' + escape(path.join(__dirname, i) + path.sep);
}).join('|');

babelrc.only = new RegExp('(' + regexp + ')');
babelrc.ignore = [ 'node_modules' ];

require('babel/register')(babelrc);

function escape(str) {
  return str.replace(/[\[\]\/{}()*+?.\\^$|-]/g, "\\$&");
}
