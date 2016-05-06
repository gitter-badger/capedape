var modules = [];
var fs = nw.require('fs'),
    path = nw.require('path'),
    async = require('async'),
    $ = require('jquery'),
    _ = require('lodash');

// Module containing directory
var p = './capedape_modules/';

function Module(name,dir,module) {
    this.name = name;
    this.dir = dir;
    this.module = module;
}

module.exports = {
    init: function() {
        var validateTest = this.validateTest;
        var runTests = this.runTests;
        // Load all the modules
        fs.readdir( p , function(err, contents){
            if (err) throw err;

            async.each( contents , function( content, callback ) {

                var _dir_to_module = path.join(p,content);
                var _path_to_module = _dir_to_module + '/' + content + '.js';
                var module = content;

                fs.access( _path_to_module , fs.R_OK | fs.W_OK, (err) => {
                    if (!err) {
                        if ( _.indexOf(modules, module) == -1 ) {
                            try {
                                var required_module = require( module + '/' + module + '.js');
                                modules.push(new Module(module,_dir_to_module,required_module));
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
                    } else {
                        console.log( 'module:'+ module + ' is invalid module');
                        callback();
                    }
                });

            }, (err) => {
                if(!err) {
                    console.log('All the modules have been loaded');
                    console.log(modules);
                    validateTest(modules,runTests);
                } else {
                    console.log('Module loading has failed');
                }
            });
        });
    },
    validateTest: function(modules,runTests) {

        async.each( modules , function( module, callback ) {
            console.log('Checking ' + module.dir + '/test.js');
            fs.access( module.dir + '/test.js' , fs.R_OK | fs.W_OK, (err) => {
                if (!err) {
                    console.log( module.name + ' contains test.js');
                    callback();
                } else {
                    callback('module:'+ module.name + ' does not have test.js');
                }
            });
        }, (err) => {
            if (!err) {
                console.log('test case has been checked');
                runTests(modules);
            } else {
                $('#testresult').html(err);
                console.log('--- Testing terminated ---');
            }
        });
    },
    runTests: function(modules) {
        async.each( modules , function( module, callback ) {
            if( !$('#'+ module.name).length ) {
                $('#testresult').append('<div id="'+module.name+'">testing...</div>');
                var test = require(module.name + '/test.js');
                test.test( $('#'+module.name) );
            }
            callback();
        }, (err) => {
            if(!err) {
                console.log('End of testing');
            } else {
                console.log(err);
            }
        });
    }
}