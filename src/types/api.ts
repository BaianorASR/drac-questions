export type TFetchTokenResponse = {
  response_code: number;
  response_message: string;
  token: string;
};

export type TQuestion = {
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  type: string;
  difficulty: string;
};

export type TFetchQuestionResponse = {
  response_code: number;
  results: TQuestion[];
};
