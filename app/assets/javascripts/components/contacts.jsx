var Header = require('./header');
var FileUpload = require('./file_upload');

var Contacts = React.createClass({
    render: function() {
        return (
            <div>
              <Header />
              <FileUpload />
            </div>
        );
    }
});
module.exports = Contacts;
