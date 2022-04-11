import { useLayoutEffect, useMemo } from 'react';

import * as T from '../store/actions/thunks.actions';
import { useAppDispatch, useAppSelector } from './redux';

export const useGame = () => {
  const {
    game: { questions, errorQuestions, isFetchingQuestion, isSelectedAnswer },
    token: { errorToken, isFetchingToken, value: token },
  } = useAppSelector(state => state);

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (token && questions.length === 0) {
      dispatch(T.thunkGetQuestions(token));
    }
  }, [dispatch, questions.length, token]);

  return useMemo(() => {
    const getErrorMessage = () =>
      errorToken || !token
        ? 'Não foi possível obter o token'
        : errorQuestions && 'Error ao obter as questions';

    return {
      error: getErrorMessage(),
      isLoading: isFetchingToken || isFetchingQuestion,

      isSelectedAnswer,
      questions,
    };
  }, [
    errorQuestions,
    errorToken,
    isFetchingQuestion,
    isFetchingToken,
    isSelectedAnswer,
    questions,
    token,
  ]);
};
