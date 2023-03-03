import * as api from 'shared/contacts-api';
import * as actions from './contacts-actions';

// import warningMessage from './../../../utils/warningMessage';

export const fetchAllContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchAllContactsLoading());
      const data = await api.getContacts();
      dispatch(actions.fetchAllContactsSuccess(data));
    } catch ({ response }) {
      dispatch(actions.fetchAllContactsError(response.data.message));
    }
  };
  return func;
};

// const isDublicate = (contacts, name) => {
//   const normalizedNewContactName = name.toLocaleLowerCase();

//   const result = contacts.find(({ name }) => {
//     return name.toLocaleLowerCase() === normalizedNewContactName;
//   });
//   console.log('result', Boolean(result));
//   return Boolean(result);
// };

export const fetchAddContact = ({ name, phone }) => {
  const func = async dispatch => {
    try {
      // const { contacts } = getState();
      // if (isDublicate(contacts.items, name)) {
      //   warningMessage(name);

      //   return false;
      // }
      dispatch(actions.fetchAddContactLoading());
      const result = await api.addContact({ name, phone });
      dispatch(actions.fetchAddContactSuccess(result));
    } catch ({ response }) {
      dispatch(actions.fetchAddContactError(response.data.message));
    }
  };
  return func;
};

export const fetchDeleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchDeleteContactLoading());
      await api.deleteContact(id);
      dispatch(actions.fetchDeleteContactSuccess(id));
    } catch ({ response }) {
      dispatch(actions.fetchDeleteContactError(response.data.message));
    }
  };
  return func;
};
