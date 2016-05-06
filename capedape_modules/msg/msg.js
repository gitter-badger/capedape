var testval = '';

module.exports = {
  prompt: function(str) {
    console.log(str);
    $('#msg-container').html(str);
  },
  test: function(m) {
    console.dir(m);
    console.log(' says hi!');
    console.log(testval);
  },
  setTestval: function(str) {
    testval = str;
  }
}