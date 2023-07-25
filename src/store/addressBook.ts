import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../miningmarket/src/store/rootReducer';
import union from 'lodash/union';
import filter from 'lodash/filter';

export interface AddressBookProps {
  address: string;
  name: string;
  uuid: string;
}

type AddressBookSliceStateProps = {
  contacts: AddressBookProps[] | null;
  contactPickedToSend: AddressBookProps | null;
  addressToSend: string | null;
  amountToSend: string | null;
};

const initialState: AddressBookSliceStateProps = {
  contacts: [],
  contactPickedToSend: null,
  addressToSend: null,
  amountToSend: null,
};

const addressBookSlice = createSlice({
  name: 'addressBook',
  initialState,
  reducers: {
    saveContact: (state: AddressBookSliceStateProps, action: PayloadAction<AddressBookProps>) => {
      state.contacts = union(state.contacts, [action.payload]);
    },
    removeContact: (state: AddressBookSliceStateProps, action: PayloadAction<string>) => {
      state.contacts = filter(state.contacts, (el) => el.uuid !== action.payload);
    },
    pickContact: (state: AddressBookSliceStateProps, action: PayloadAction<AddressBookProps>) => {
      state.contactPickedToSend = action.payload;
    },
    removePickedContact: (state: AddressBookSliceStateProps) => {
      state.contactPickedToSend = null;
    },
    setAddressToSend: (state: AddressBookSliceStateProps, action: PayloadAction<string | null>) => {
      state.addressToSend = action.payload;
    },
    clearAddresses: (state: AddressBookSliceStateProps) => {
      state.addressToSend = null;
      state.contactPickedToSend = null;
    },
    setAmountToSend: (state: AddressBookSliceStateProps, action: PayloadAction<string | null>) => {
      state.amountToSend = action.payload;
    },
    clearAmountToSend: (state: AddressBookSliceStateProps) => {
      state.amountToSend = null;
    },
    logout: () => initialState,
  },
});

export const selectContacts = (state: RootState) => state.addressBook.contacts;
export const selectContactPickedToSend = (state: RootState) =>
  state.addressBook.contactPickedToSend;
export const selectAddressToSend = (state: RootState) => state.addressBook.addressToSend;
export const selectAmountToSend = (state: RootState) => state.addressBook.amountToSend;

export const {
  saveContact,
  removeContact,
  pickContact,
  removePickedContact,
  setAddressToSend,
  clearAddresses,
  setAmountToSend,
  clearAmountToSend,
  logout,
} = addressBookSlice.actions;

export default addressBookSlice.reducer;
