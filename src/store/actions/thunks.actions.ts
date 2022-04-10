import { createAsyncThunk } from '@reduxjs/toolkit';
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
