import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFilteredContacts } from 'components/redux/filter/filter-selectors';

import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'components/redux/contacts/contacts-operations';

import SvgIcon from '../SvgIcon/SvgIcon';
import css from './ContactList.module.css';

export default function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(fetchDeleteContact(contactId));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id} className={css.contactList__item}>
          <p className={css.contactList__name}>{name}: </p>
          <p className={css.contactList__number}>{phone}</p>
          <button
            className={css.contactList__deleteBtn}
            onClick={() => handleDeleteContact(id)}
          >
            <SvgIcon id="svg" />
          </button>
        </li>
      ))}
    </ul>
  );
}
