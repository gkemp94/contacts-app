import * as React from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/contactsAPI';


class App extends React.Component {
  state  = {
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts)=> {
        this.setState(() => ({
          contacts
        }))
      })
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))

    ContactsAPI.remove(contact)
  }


  render() {
    return (
      <div>
        <ListContacts 
          contacts={this.state.contacts} 
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
