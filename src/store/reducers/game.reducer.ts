/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TQuestion } from '../../types/api';
import { thunkGetQuestions } from '../actions/thunks.actions';

type TGameState = {
  isSelectedAnswer: boolean;
  questions: TQuestion[] | [];
  isFetchingQuestion: boolean;
  errorQuestions: string;
};

const initialState: TGameState = {
  isSelectedAnswer: false,
  questions: [],
  isFetchingQuestion: false,
  errorQuestions: '',
};

const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    actionSetIsSelectedAnswer(state) {
      state.isSelectedAnswer = !state.isSelectedAnswer;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        thunkGetQuestions.fulfilled,
        (state, { payload }: PayloadAction<TQuestion[] | string>) => {
          if (typeof payload !== 'string') {
            state.questions = payload;
          }
          state.isFetchingQuestion = false;
        },
      )
      .addCase(thunkGetQuestions.pending, state => {
        state.isFetchingQuestion = true;
      })
      .addCase(thunkGetQuestions.rejected, (state, action) => {
        state.errorQuestions = action.meta.requestStatus;
        state.isFetchingQuestion = false;
      });
  },
});

export const { actionSetIsSelectedAnswer } = game.actions;

export default game.reducer;
