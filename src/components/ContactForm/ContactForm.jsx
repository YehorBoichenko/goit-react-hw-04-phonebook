import { useState } from 'react';
import styles from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChanger = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const formSubmit = event => {
    event.preventDefault();

    addContact(name, number);
    reset();
  };
  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <>
      <form className={styles.form} onSubmit={formSubmit}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChanger}
            placeholder="Name"
          />
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChanger}
            placeholder="Phone"
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contacts
        </button>
      </form>
    </>
  );
}
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
