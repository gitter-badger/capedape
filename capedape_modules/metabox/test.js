var file = require('file/file.js'),
    $ = require('jquery');

module.exports = {
  test: function(result) {
    result.append('1. Should ');
    result.append('1. Should ');
    return 'Success';
  }
}