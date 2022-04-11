import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { Action } from 'redux';

import game from './reducers/game.reducer';
import player from './reducers/player.reducer';
import settings from './reducers/settings.reducer';
import token from './reducers/token.reducer';

const store = () =>
  configureStore({
    reducer: {
      game,
      player,
      settings,
      token,
    },
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(store);
