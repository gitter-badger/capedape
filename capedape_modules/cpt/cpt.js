/**
 * CPT
 * Custom Post Type Generator
 */
var $ = require('jquery'),
    _ = require('lodash');

var paths = {
    "base": "/template",
    "selected": "/default"
}

var _testargs = {
    "name":"eric",
    "age":"32"
}

var path = __dirname + paths.base + paths.selected;

function make(args) {
    fs.readFile(path + '/cpt.template', (err,data) =>{
        if(err) throw err;
        var compiled = _.template(data)
    });
}

module.exports = {
    init: function() {
        console.log('Custom Post Type module has been initiated...');
    },
    make: function() {
        return make(_testargs);
    },
    view: function() {
        var rendered = '';
        return rendered;
    }

}