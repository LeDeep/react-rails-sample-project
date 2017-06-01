var Header = require('./header');
var FileUpload = require('./file_upload');
var Body = require('./body');

var Contacts = React.createClass({
    render: function() {
        return (
            <div>
              <Header />
              <FileUpload />
              <Body />
            </div>
        );
    }
});
module.exports = Contacts;
