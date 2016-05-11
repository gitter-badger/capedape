var $ = require('jquery'),
    _ = require('lodash');

module.exports = {
  render: function(module_name) {
    console.log(module_name + ' initial rendering ');
    $.get('capedape_modules/' + module_name + '/view.html', function(data) {
        var module_container = $('#' + module_name );
        if( !module_container.length ) {
            $('#modules').append('<div class="capedape_modules" id="' + module_name + '"></div>');
        }
        $('#cpt').html(data);
    });
  }
}