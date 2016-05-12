var OptsMixin = {
  init: function() {
    this.on('updated', function() { console.log(this + 'Updated!') });
  },

  getOpts: function() {
    return this.opts;
  },

  setOpts: function(opts, update) {
    this.opts = opts;
    if (!update) this.update();
    return this;
  },

  testMixin: function() {
    console.log('Tested mixin');
  }
};

/**
 * Capedape is current it's running in 'In-browser compilation'
 *
 * according to <http://riotjs.com/api/#mounting>
 * Note: users of In-browser compilation
 * will need to wrap calls to riot.mount in riot.compile
 * in order to get returned tag instances.
 * Without this, calls to riot.mount will return undefined.
 *
 * mixin and other stuff doesn't work 
 */
var clicked = 0;
riot.compile(function() {
  // here tags are compiled and riot.mount works synchronously
  // var sample = riot.mount('sample')[0];
});



