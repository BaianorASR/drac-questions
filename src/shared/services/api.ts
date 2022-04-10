import axios, { AxiosError } from 'axios';

type TFetchTokenResponse = {
  response_code: number;
  response_message: string;
  token: string;
};

export const fetchToken = () => {
  const END_POINT = 'https://opentdb.com/api_token.php?command=request';
  return axios
    .get<TFetchTokenResponse>(END_POINT)
    .then(res => res.data.token)
    .catch((error: AxiosError) => error.message);
};

// export const fetchQuestion = async (amount, token) => {
//   const response = await fetch(
//     `https://opentdb.com/api.php?amount=${amount}&token=${token}`,
//   );
//   return await response.json();
// };
