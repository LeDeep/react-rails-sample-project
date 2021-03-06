var Dropzone = require('react-dropzone');
var request = require('superagent');

var FileUpload = React.createClass({
  onDrop(files){
      var file = new FormData();
      file.append('name',files[0])
      alert('Your file is uploading, and will be done soon.')
      var req = request
      .post('/api/v1/contacts/import')
      .send(file);
      req.end(function(err,response){
        window.location.reload();
      });
    },

    render(){
      const textStyle = {
        margin: '25px'
      }
      const dropAreaStyle = {
        width: '200px',
        height: '150px',
        borderWidth: '5px',
        borderColor: '#f0ad4e',
        borderStyle: 'dashed',
        borderRadius: '5px',
        margin: '10px'
      }
      return(
        <div>
          <Dropzone style={dropAreaStyle} onDrop={this.onDrop} accept=".csv">
            <p style={textStyle}>Drop csv file here, or click to
              select file to upload. Only *.csv files will be accepted
            </p>
          </Dropzone>
        </div>
      );
    }
});
module.exports = FileUpload;
