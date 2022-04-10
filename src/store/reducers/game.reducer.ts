/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TQuestion = {
  category: string;
  question: string;
  correctAnsw: string;
  incorrectAnswers: string[];
  type: string;
  difficulty: string;
};

type TGameState = {
  isSelectedAnswer: boolean;
  questions: TQuestion;
};

const initialState: TGameState = {
  isSelectedAnswer: false,
  questions: {
    category: '',
    question: '',
    correctAnsw: '',
    incorrectAnswers: [],
    type: '',
    difficulty: '',
  },
};

const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    actionSetQuestion(state, { payload }: PayloadAction<TQuestion>) {
      state.questions = payload;
    },
    actionSetIsSelectedAnswer(state) {
      state.isSelectedAnswer = !state.isSelectedAnswer;
    },
  },
});

export const { actionSetQuestion, actionSetIsSelectedAnswer } = game.actions;

export default game.reducer;
