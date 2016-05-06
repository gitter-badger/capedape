var modules = [];
var fs = nw.require('fs'),
    path = nw.require('path'),
    async = require('async'),
    _ = require('lodash');

// Module containing directory
var p = './capedape_modules/';

module.exports = {
    test: function() {
        // Load all the modules 
        fs.readdir( p , function(err, contents){
            if (err) throw err;

            async.each( contents , function( content, callback ) {
                var _path_to_module = path.join(p,content) + '/' + content + '.js';
                fs.access( _path_to_module , fs.R_OK | fs.W_OK, (err) => {
                    var module = content;
                    if (err) {
                        console.log( 'module:'+ module + ' is invalid module');
                        callback();
                    } else {
                        if ( _.indexOf(modules, module) == -1 ) {
                            try {
                                var required_module = require( module + '/' + module + '.js');
                                modules[module] = required_module;
                                console.log( 'module:' + module + ' is a valid module' );
                            }
                            catch(e) {
                                console.log(e);
                            }
                            callback();
                        } else {
                            console.log( 'There are more than 1 of '+ module  );
                            callback();
                        }
                    }
                });
            }, function(err) {
                if(err) {
                    console.log('Module loading has failed');
                } else {
                    console.log(modules);
                }
            });
        });
    }
}