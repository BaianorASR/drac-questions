import axios, { AxiosError } from 'axios';

import type { TFetchQuestionResponse, TFetchTokenResponse } from '../types/api';

export const fetchToken = () => {
  const END_POINT = 'https://opentdb.com/api_token.php?command=request';
  return axios
    .get<TFetchTokenResponse>(END_POINT)
    .then(res => res.data.token)
    .catch((error: AxiosError) => error.message);
};

export const fetchQuestion = async (token: string, amount = 5) => {
  const END_POINT = `https://opentdb.com/api.php?amount=${amount}&token=${token}`;

  return axios
    .get<TFetchQuestionResponse>(END_POINT)
    .then(res => res.data.results)
    .catch((error: AxiosError) => error.message);
};
