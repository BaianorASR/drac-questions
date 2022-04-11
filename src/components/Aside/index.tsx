import { useRouter } from 'next/router';
import React from 'react';

import * as S from './styles';

const Aside = () => {
  const { push, pathname } = useRouter();

  const changeClass = (path: string) => (pathname === path ? 'selected' : 'unselected');

  return (
    <S.Container>
      <S.Button className={changeClass('/feedback')} onClick={() => push('/feedback')}>
        Feedback
      </S.Button>
      <S.Button className={changeClass('/ranking')} onClick={() => push('/ranking')}>
        Ranking
      </S.Button>
      <S.Button onClick={() => push('/')}>Play again</S.Button>
    </S.Container>
  );
};

export default Aside;
