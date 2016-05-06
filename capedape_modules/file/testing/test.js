var file = require('file/file.js'),
    fs = nw.require('fs');
    $ = require('jquery');

var testSave,testLoad,r;

module.exports = {
  test: function(result) {
    testSave = this.testSave;
    testLoad = this.testLoad;
    r = result;
    r.append('<p>Testing Save</p>');
    // clean the testing file first
    console.log(__dirname + '/testfile.txt');
    fs.unlink(__dirname + '/testfile.txt', (err) => {
        if (!err) {
            r.append('<p>testfile.txt has been deleted</p>');
            testSave();
        } else {
            return err;
        }
    });
  },
  testSave: function() {
    console.log('running testSave');
    file.save(__dirname , '/testfile.txt','Testing', (err)=> {
        if (!err) {
            r.append('<p>testfile.txt has been created</p>');
            testLoad();
        } else {
            return err;
        }
    });
  },
  testLoad: function() {
    console.log('running testLoad');
    file.load(__dirname , '/testfile.txt',(err,data)=> {
        if (!err) {
            if( data == 'Testing' ) {
                r.append('<p>testfile.txt has been loaded</p>');
                r.append('<p>File passed</p>');
            } else {
                return 'Load did not work';
            }
        } else {
            return err;
        }
    });
  }
}