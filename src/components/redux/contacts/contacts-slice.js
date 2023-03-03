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
  extraReducers: builder => {
    builder
      .addCase(actions.fetchAllContactsLoading, state => {
        state.loading = true;
      })
      .addCase(actions.fetchAllContactsSuccess, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(actions.fetchAllContactsError, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(actions.fetchAddContactLoading, state => {
        state.loading = true;
      })
      .addCase(actions.fetchAddContactSuccess, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(actions.fetchAddContactError, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(actions.fetchDeleteContactLoading, state => {
        state.loading = true;
      })
      .addCase(actions.fetchDeleteContactSuccess, (state, { payload }) => {
        state.loading = false;
        const index = state.items.findIndex(item => item.id === payload);
        state.items.splice(index, 1);
      })
      .addCase(actions.fetchDeleteContactError, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { addContact, deleteContact } = contanctsSlice.actions;
export default contanctsSlice.reducer;
