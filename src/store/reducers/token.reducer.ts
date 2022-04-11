/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type TFetchTokenResponse = {
  response_code: number;
  response_message: string;
  token: string;
};

export const thunkGetToken = createAsyncThunk('token/thunkGetToken', async () => {
  const END_POINT = 'https://opentdb.com/api_token.php?command=request';
  const response = await axios.get<TFetchTokenResponse>(END_POINT);
  return response.data.token;
});

type TokenState = {
  value: string;
  errorToken: string;
  isFetchingToken: boolean;
};

const initialState: TokenState = {
  value: '',
  errorToken: '',
  isFetchingToken: false,
};

const token = createSlice({
  name: 'token',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(thunkGetToken.fulfilled, (state, { payload }: PayloadAction<string>) => {
        state.value = payload;
        state.isFetchingToken = false;
      })
      .addCase(thunkGetToken.pending, state => {
        state.isFetchingToken = true;
      })
      .addCase(thunkGetToken.rejected, (state, action) => {
        state.errorToken = action.meta.requestStatus;
        state.isFetchingToken = false;
      });
  },
});

// export const { nony } = token.actions;

export default token.reducer;
