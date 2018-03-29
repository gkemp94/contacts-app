import * as React from 'react';

interface Person {
  name: string;
}

interface ContactListProps {
  contacts: Person[];
}

class ContactList extends React.Component<ContactListProps> {
  render() {
    const people = this.props.contacts;
    return (
      <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
      </ol>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ContactList 
          contacts={[
          {name: 'Tyler'},
          {name: 'Karan'},
          {name: 'Richard'}
          ]}
        />
        <ContactList 
          contacts={[
          { name: 'Amanda' },
          { name: 'George' },
          { name: 'Bryan' }
          ]}
        />
      </div>
    );
  }
}

export default App;
