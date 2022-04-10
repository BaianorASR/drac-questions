import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';

import Header from '../core/Header';
import Question from '../core/Question';
import Timer from '../core/Timer';
import { useAppDispatch, useAppSelector } from '../shared/hooks/redux';
import * as A from '../store/reducers';
import * as S from '../styles/pages/Game';

type GameProps = { token: string };

const Game: NextPage<GameProps> = ({ token }) => {
  const [index, setIndex] = useState(0);
  const dispatch = useAppDispatch();
  const { isSelectedAnswer, questions } = useAppSelector(state => state.game);

  const handleClickNext = () => {
    dispatch(A.actionSetIsSelectedAnswer());
    dispatch(A.actionResetTimer());
    setIndex(prev => prev + 1);
  };

  return (
    <S.HomeContainer>
      <Header />
      {/* question={questions[index]} */}
      <Question index={index} />
      <Timer />
      {isSelectedAnswer && (
        <S.ButtonNext type="button" onClick={handleClickNext}>
          Next
        </S.ButtonNext>
      )}
    </S.HomeContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { token: '' } };
};

export default Game;
