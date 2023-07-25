import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KeyringPair } from '@polkadot/keyring/types';
import { RootState } from '../../../miningmarket/src/store/rootReducer';
import { Keyring } from '@polkadot/keyring';
import cloneDeep from 'lodash/cloneDeep';

type AuthSliceStateProps = {
  mnemonic: string[] | null;
  privateKey: string | null;
  address: string | null;
  isAuthenticated: boolean;
  pair: KeyringPair | null;
  keyring: Keyring | null;
};

const initialState: AuthSliceStateProps = {
  mnemonic: null,
  privateKey: null,
  address: null,
  isAuthenticated: false,
  pair: null,
  keyring: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMnemonic: (state: AuthSliceStateProps, action: PayloadAction<{ mnemonic: string }>) => {
      state.mnemonic = action.payload.mnemonic.split(' ');
    },
    clearMnemonic: (state: AuthSliceStateProps) => {
      state.mnemonic = null;
    },
    setPair: (state: AuthSliceStateProps, action: PayloadAction<{ pair: KeyringPair }>) => {
      state.pair = cloneDeep(action.payload.pair);
      state.isAuthenticated = true;
    },
    setKeyring: (state: AuthSliceStateProps, action: PayloadAction<{ keyring: Keyring }>) => {
      state.keyring = cloneDeep(action.payload.keyring);
    },
    logout: () => initialState,
  },
});

export const selectMnemonic = (state: RootState) => state.auth.mnemonic;
export const selectAddress = (state: RootState) => state.auth.pair.address.address;
export const selectPair = (state: RootState) => state.auth.pair;
export const selectKeyring = (state: RootState) => state.auth.keyring;
export const selectAuthenticationState = (state: RootState) => state.auth.isAuthenticated;
export const selectProperties = (state: RootState) => state.api.properties;

export const { setMnemonic, clearMnemonic, setPair, setKeyring, logout } = authSlice.actions;

export default authSlice.reducer;
