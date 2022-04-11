/* eslint-disable security/detect-object-injection */
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import Header from '../components/Header';
import Loading from '../components/Loading';
import Question from '../components/Question';
import Timer from '../components/Timer';
import { TimerContext } from '../context/Timer';
import { setLocalStorage } from '../helpers/storage';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useGame } from '../hooks/useQuestions';
import { wrapper } from '../store/index.store';
import * as A from '../store/reducers';
import * as S from '../styles/pages/Game';

type GameProps = { amount: number };

const Game: NextPage<GameProps> = ({ amount }) => {
  const [index, setIndex] = useState(0);
  const dispatch = useAppDispatch();
  const { error, isLoading, isSelectedAnswer, questions } = useGame();
  const { push } = useRouter();
  const { resetTimer } = useContext(TimerContext);
  const {
    gravatarEmail: picture,
    name,
    score,
    assertions,
  } = useAppSelector(state => state.player);

  useEffect(() => {
    resetTimer();
  }, [resetTimer]);

  const handleClickNext = () => {
    dispatch(A.actionSetIsSelectedAnswer());
    if (index === amount - 1) {
      setLocalStorage({ name, picture, score, assertions });
      push('feedback');
      return;
    }
    setIndex(prev => prev + 1);
    resetTimer();
  };

  if (isLoading) return <Loading />;
  if (error) return <h1>{error}</h1>;

  return (
    <S.GameContainer>
      <Header />
      {!!questions.length && <Question question={questions[index]} />}
      <Timer />
      {isSelectedAnswer && (
        <S.ButtonNext type="button" onClick={handleClickNext}>
          Next
        </S.ButtonNext>
      )}
    </S.GameContainer>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  const {
    settings: { amount },
  } = store.getState();

  return { props: { amount } };
});

export default Game;
