import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchQuestion, fetchToken } from '../../services/api';

export const thunkGetToken = createAsyncThunk('token/thunkGetToken', () =>
  fetchToken().then(res => res),
);

export const thunkGetQuestions = createAsyncThunk(
  'game/thunkGetQuestions',
  (token: string) => fetchQuestion(token).then(res => res),
);
