import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getFilteredContacts } from 'components/redux/filter/filter-selectors';
import { getAllContacts } from 'components/redux/contacts/contacts-selectors';

import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'components/redux/contacts/contacts-operations';
// import { deleteContact } from 'components/redux/contacts/contacts-slice';

import SvgIcon from '../SvgIcon/SvgIcon';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  // const filteredContacts = useSelector(getFilteredContacts);
  // console.log(filteredContacts);

  const contactsList = useSelector(getAllContacts);
  console.log(contactsList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(fetchDeleteContact(contactId));
  };

  return (
    <ul className={css.contactList}>
      {contactsList.items.map(({ id, name, number }) => (
        <li key={id} className={css.contactList__item}>
          <p className={css.contactList__name}>{name}: </p>
          <p className={css.contactList__number}>{number}</p>
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
