/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TokenState = string;

const token = createSlice({
  name: 'token',
  initialState: '' as TokenState,
  reducers: {
    actionSetToken(state, { payload }: PayloadAction<string>) {
      state = payload;
    },
  },
});

export const { actionSetToken } = token.actions;

export default token.reducer;
