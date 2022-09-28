import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  addContact = (contact) => {
    this.setState((prevState) => {
      const newContact = {
        id: nanoid(),
        ...contact
      }

      return {
        contacts: [...prevState.contacts, newContact]
      }
    })
  }

  render() {
    const { addContact } = this;
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact}/>
        
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={contacts} />
      </div>
    )
  }
}
