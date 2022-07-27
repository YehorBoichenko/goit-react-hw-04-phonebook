import React, { Component } from 'react';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactLIst/ContactList";
import Filter from "./Filter/Filter";
import Title from "./Title/Title";
import styles from '../App.module.css'
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const getContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(getContacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }


  addContact = newContact => {

  const contactsCheck = this.state.contacts.some(
    ({ name }) => name === newContact.name,
  );
  if (contactsCheck ) {
    alert(`${newContact.name} is already in contacts book`);
    return;
  }
    this.setState(prevState => ({
      contacts: [{ ...newContact, id:nanoid()}, ...prevState.contacts],
  }));
};
  onChange = event => {
   const {name,value}=event.currentTarget
    this.setState({
      [name]:value
    });
  };
onButtonDelete =  id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  this.reset();
};
  reset = () => {
    this.setState({ filter: '' });
  };

render(){
  const { filter, contacts } = this.state;
  const loweredContacts = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(loweredContacts),);
  return (
    <>
    <section className={styles.section}>
      <Title text="PhoneBook" />
      <ContactForm addContact={this.addContact} list={this.state.contacts} />
      <Title text="Contacts" />
        <Filter value={this.state.filter} onChange={this.onChange} />
      <ContactList filtered={filteredContacts} onButtonDelete={this.onButtonDelete}/>
      </section>
    </>
  )
}

};
