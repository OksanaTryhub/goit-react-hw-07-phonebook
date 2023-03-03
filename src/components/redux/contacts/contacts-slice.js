import { createSlice } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contanctsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [actions.fetchAllContactsLoading]: state => {
      state.loading = true;
    },
    [actions.fetchAllContactsSuccess]: (state, { payload }) => {
      state.loading = false;
      state.items = payload;
    },
    [actions.fetchAllContactsError]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [actions.fetchAddContactLoading]: state => {
      state.loading = true;
    },
    [actions.fetchAddContactSuccess]: (state, { payload }) => {
      state.loading = false;
      state.items.push(payload);
    },
    [actions.fetchAddContactError]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [actions.fetchDeleteContactLoading]: state => {
      state.loading = true;
    },
    [actions.fetchDeleteContactSuccess]: (state, { payload }) => {
      state.loading = false;
      const index = state.items.findIndex(item => item.id === payload);
      state.items.splice(index, 1);
    },
    [actions.fetchDeleteContactError]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // deleteContact: (state, { payload }) =>
    //   state.filter(contact => contact.id !== payload),
  },
});

export const { addContact, deleteContact } = contanctsSlice.actions;
export default contanctsSlice.reducer;
