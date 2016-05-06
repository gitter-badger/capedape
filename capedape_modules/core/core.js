/**
 * Core.js
 * It does:
 *     1. Load/Save Preference
 *     2. Load/Save Projects
 * @type {[type]}
 */
var preference = require('./preference.js'),
    manager = require('./project_manager.js');

module.exports = {
  savePreference : function() {
    preference.save();
  },
  loadPreference : function() {
    preference.load();
  },
  saveProject: function() {
    manager.save();
  },
  loadProject: function() {
    manager.load();
  }
}