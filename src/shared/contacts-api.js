import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6400f868ab6b7399d09eacf7.mockapi.io/api/contacts',
});

export const getContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
