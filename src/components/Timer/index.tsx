import { NextPage } from 'next';
import { useContext } from 'react';

import { TimerContext } from '../../context/Timer';
import * as S from './styles';

const Timer: NextPage = () => {
  const { timer } = useContext(TimerContext);

  return (
    <S.Container timer={timer}>
      TEMPO: <span>{timer}</span>
    </S.Container>
  );
};

export default Timer;
