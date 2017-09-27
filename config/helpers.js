var path = require('path');
var rootPath = path.resolve(__dirname, '..');

function root (args) {
  console.log(args);
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [rootPath].concat(args));
}

exports.root = root;