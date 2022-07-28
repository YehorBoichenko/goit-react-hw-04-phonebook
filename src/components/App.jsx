import React, { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactLIst/ContactList';
import Filter from './Filter/Filter';
import Title from './Title/Title';
import styles from '../App.module.css';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'CustomHooks/UseLocalStorage';

export default function App() {
  useLocalStorage();
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const contactCheck = contacts.find(({ name }) => name === newContact.name);

    if (contactCheck !== undefined) {
      alert(`${newContact.name} is already in our contacts book`);
      return;
    }
    setContacts(prevState => [newContact, ...prevState]);
  };
  const onChange = event => {
    setFilter(event.target.value);
  };
  const onButtonDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  const loweredContacts = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(loweredContacts)
  );

  return (
    <>
      <section className={styles.section}>
        <Title text="PhoneBook" />
        <ContactForm addContact={addContact} list={contacts} />
        <Title text="Contacts" />
        <Filter value={filter} onChange={onChange} />
        <ContactList
          filtered={filteredContacts}
          onButtonDelete={onButtonDelete}
        />
      </section>
    </>
  );
}
