var ContactTable = require('./contact_table');

var Body = React.createClass({
  getInitialState() {
    return { contacts: []}
  },

  componentDidMount() {
    $.getJSON('/api/v1/contacts.json', (response) => { this.setState({ contacts: response }) });
  },

  render() {
    return (
      <div>
        <ContactTable contacts={this.state.contacts} />
      </div>
    )
  }
})
module.exports = Body;
