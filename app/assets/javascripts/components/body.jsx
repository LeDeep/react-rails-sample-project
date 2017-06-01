var ContactTable = require('./contact_table');

var Body = React.createClass({
  getInitialState() {
    return { contacts: []}
  },

  componentDidMount() {
    $.getJSON('/api/v1/contacts.json', (response) => { this.setState({ contacts: response }) });
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/contacts/${id}`,
      type: 'DELETE',
      success:() => {
        this.removeContact(id);
      }
    });
  },

  removeContact(id) {
    var newContacts = this.state.contacts.filter((contact) => {
      return contact.id != id;
    });
    this.setState({ contacts: newContacts });
  },

  render() {
    return (
      <div>
        <ContactTable contacts={this.state.contacts} handleDelete={this.handleDelete}/>
      </div>
    )
  }
})
module.exports = Body;
