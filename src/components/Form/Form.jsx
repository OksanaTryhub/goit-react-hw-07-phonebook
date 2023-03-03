import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAddContact } from 'components/redux/contacts/contacts-operations';

import css from './Form.module.css';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const dispatch = useDispatch();

  const handleInputCange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phoneNumber':
        setPhoneNumber(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setPhoneNumber('');
  };

  const handleAddContact = ({ name, phone }) => {
    dispatch(fetchAddContact({ name, phone }));
    resetForm();
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit = handleAddContact({ name, phoneNumber });
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.contactForm__label}>
        Name
        <input
          className={css.contactForm__input}
          type="text"
          name="name"
          autoComplete="off"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputCange}
        />
      </label>
      <label className={css.contactForm__label}>
        Number
        <input
          className={css.contactForm__input}
          type="tel"
          name="phoneNumber"
          autoComplete="off"
          value={phoneNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputCange}
        />
      </label>
      <button type="submit" className={css.contactForm__btn}>
        Add contact
      </button>
    </form>
  );
}
