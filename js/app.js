// Do One Thing well
// 
//App Module Path for capedape module path
require('app-module-path').addPath('./capedape_modules');

var $ = require('jquery'),
    _ = require('lodash'),
    win = nw.Window.get(),
    msg = require('msg/msg.js'),
    mainmenu = require('mainmenu/mainmenu.js');

var cm = {};

var workspace = {};
var current_project;

function setup() {
    win.resizeTo(preference.window.width,preference.window.height);
    win.setMinimumSize(380,400);
    mainmenu.init();
}

// setup();
// 
// 
var test = require('./testing/test.js');

test.init();




