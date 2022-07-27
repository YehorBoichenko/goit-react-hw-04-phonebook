import { Component } from 'react'
import styles from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {

  state = {
    name: '',
    number: '',
  };
  handleChanger = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  formSubmit = event => {
      event.preventDefault();
      
      const newContact = {
          name: this.state.name,
          number:this.state.number,
      }
     this.props.addContact(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.formSubmit}>
          <label className={styles.label}>
            <input
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
                        onChange={this.handleChanger}
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
              value={this.state.number}
                        onChange={this.handleChanger}
                        placeholder="Phone"
            />
                </label>
                <button type='submit' className={styles.button}>Add contacts</button>
        </form>
      </>
    )
  }
}
ContactForm.propTypes = {
    addContact:PropTypes.func.isRequired,
}