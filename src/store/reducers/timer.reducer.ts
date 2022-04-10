/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TTimerState = {
  isPlaying: boolean;
  id: null | number;
  counter: number;
};
/* <Provider store={store}>
  </Provider> */
const initialState: TTimerState = {
  isPlaying: false,
  id: null,
  counter: 30,
};

const timer = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    actionDecrement(state) {
      state.counter -= 1;
    },
    actionSetTimerID(state, { payload }: PayloadAction<number>) {
      state.id = payload;
    },
    actionPauseTimer(state) {
      state.isPlaying = false;
    },
    actionResetTimer(state) {
      state.counter = 30;
      state.isPlaying = true;
    },
  },
});

export const { actionDecrement, actionSetTimerID, actionPauseTimer, actionResetTimer } =
  timer.actions;

export default timer.reducer;
