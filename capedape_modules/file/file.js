/**
 * This module delegates all of the file related stuff
 * like Save/Open and what not
 * 
 */
var fs = nw.require('fs');

module.exports = {
  /**
   * Save
   * @param  {String} path          path where the file will be saved
   * @param  {String} filename      the name of the file including the extention
   * @param  {String} content       stringified content
   * @param  {String} encode        encoding type, default value = 'utf-8'
   * @param  {Function} callback    callback function
   */
  save: function(path, filename, content ,encode = 'utf-8',callback) {
    fs.writeFile(path + filename, content, encode, function(err){
        callback(err);
    })
  },
  /**
   * Load
   * @param  {String}   path     path to the file
   * @param  {String}   filename Filename including the extension
   * @param  {String}   encode   encoding type, default value = 'utf-8'
   * @param  {Function} callback callback function
   */
  load: functon(path, filename, encode = 'utf-8', callback) {
    fs.readFile(path + filename, encode, function(err,data){
        callback(err,data);
    });
  }
}