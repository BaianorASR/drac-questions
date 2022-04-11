/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import md5 from 'crypto-js/md5';

type TPlayerState = {
  name: string;
  gravatarEmail: string;
  assertions: number;
  score: number;
};

const initialState: TPlayerState = {
  name: '',
  gravatarEmail: 'https://www.gravatar.com/avatar/d590b690a1281e6ef04e31dff74748d0',
  assertions: 0,
  score: 0,
};

const player = createSlice({
  name: 'player',
  initialState,
  reducers: {
    actionSetUser(state, { payload }: PayloadAction<{ name: string; email: string }>) {
      state.name = payload.name;
      state.gravatarEmail = `https://www.gravatar.com/avatar/${md5(
        payload.email,
      ).toString()}`;
    },
    actionResetPlayer(state) {
      state = initialState;
    },
    actionSetScore(state, { payload }: PayloadAction<number>) {
      state.score += payload;
    },
    actionSetAssertions(state, { payload }: PayloadAction<number>) {
      state.assertions = payload;
    },
  },
});

export const { actionSetUser, actionResetPlayer, actionSetAssertions, actionSetScore } =
  player.actions;

export default player.reducer;
