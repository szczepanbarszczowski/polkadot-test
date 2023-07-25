import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './rootReducer';
import { ApiPromise } from '@polkadot/api';

type ApiSliceStateProps = {
  api: ApiPromise | null;
  balance: string | null;
  properties: any | null;
};

const initialState: ApiSliceStateProps = {
  api: null,
  balance: null,
  properties: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setApi: (state: ApiSliceStateProps, action: PayloadAction<ApiPromise>) => {
      state.api = action.payload;
    },
    setBalance: (state: ApiSliceStateProps, action: PayloadAction<string>) => {
      state.balance = action.payload;
    },
    setProperties: (state: ApiSliceStateProps, action: PayloadAction<any>) => {
      state.properties = action.payload;
    },
    logout: () => initialState,
  },
});

export const selectApi = (state: RootState) => state.api.api;
export const selectBalance = (state: RootState) => state.api.balance;

export const { setApi, setBalance, setProperties, logout } = apiSlice.actions;

export default apiSlice.reducer;
