export const getFilter = store => store.filter;

export const getFilteredContacts = store => {
  const normalizedFilter = store.filter.toLocaleLowerCase();

  return store.contacts.items.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedFilter)
  );
};
