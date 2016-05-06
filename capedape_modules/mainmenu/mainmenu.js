/*
 * Builds and renders the menu
 */

/**
 * Validate if the file contains minimum information
 *     - name, version
 * 
 * @param  {obj} proj       parsed json
 * @return {boolean}        validation
 */
function validateProjectfile(proj) {

    return ( (proj.name != undefined ) && (proj.version != undefined ) );

}

module.exports = {
  init: function() {
        fs.readFile(__dirname + '/view.html', 'utf-8', (err,data) => {
            $('#menu').html(data);
            this.setup();
        });
  },
  setup: function() {

    $('#menu_open').on('click',function(e) {
        e.preventDefault();
        $('#openproject').trigger('click');
    });

    $('#openproject').on('change', function(e) {
        e.preventDefault();
        
       
        var project_path = $(this).val();
        console.log('Opening ' +  project_path);
        fs.readFile( project_path,'utf-8', (err,data) => {
            var project = JSON.parse(data);
            if( validateProjectfile(project) ) {
                if( workspace[project_path] ) {
                    msg.prompt('This project is currently opened');
                } else {
                    workspace[project_path] = project;
                    var urlstr = $(this).val();
                    var r = /[^\/]*$/;
                    current_project = { path: urlstr.replace(r, ''), proj: project };
                    console.log('... ' + project.name + ' loaded ... ');
                }
            } else {
                msg.prompt('Invalid File');
            }
        });
    });

    $('#menu_save').on('click', function(e) {
        e.preventDefault();
        var str = JSON.stringify(current_project.proj);
        var filename = $('#newsave').val();
        var newpath = current_project.path + '/' + filename;
        fs.writeFile(newpath,str,'utf-8', function(err) {
            if (err) throw err;
            console.log( current_project.proj.name + ' has been saved at ' + current_project.path );
        } );
    });

  }
};