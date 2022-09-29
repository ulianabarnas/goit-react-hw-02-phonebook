import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
    // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }

  addContact = (contact) => {
    if (this.isDublicate(contact)) {
      return alert('')
    }

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

  isDublicate = (contactName) => {
    const { contacts } = this.state;
    const result = contacts.find(contact => contact.name === contactName);

    return result;
  }

  changeFilter = (e) => {
    this.setState({filter: e.target.value})
  }

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const { addContact, changeFilter, getFilteredContacts, deleteContact } = this;
    const { filter } = this.state;

    const filteredContacts = getFilteredContacts();

    return (
      <main>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact}/>
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={filteredContacts} onDeleteContact={deleteContact} />
      </main>
    )
  }
}
