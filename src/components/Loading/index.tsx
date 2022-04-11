import React from 'react';

import * as S from './styles';

const Loading = () => {
  return (
    <S.Container>
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </S.Container>
  );
};

export default Loading;
