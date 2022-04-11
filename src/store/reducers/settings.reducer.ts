/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TSettingsState = {
  amount: number;
  difficulty?: string;
};

const initialState: TSettingsState = {
  amount: 5,
};

const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    actionSetAmount(state, { payload }: PayloadAction<number>) {
      state.amount = payload;
    },
  },
});

export const { actionSetAmount } = settings.actions;

export default settings.reducer;
