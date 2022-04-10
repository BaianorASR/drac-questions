import { NextPage } from 'next';

import { useAppSelector } from '../../shared/hooks/redux';
import * as S from './styles';

const Header: NextPage = () => {
  const { gravatarEmail, name, score } = useAppSelector(state => state.player);

  return (
    <S.HeaderContainer>
      <S.AvatarImageContainer src={gravatarEmail} alt="avatar" />
      <S.AvatarInfosContainer>
        <p>{name}</p>
        <p>Score: {score}</p>
      </S.AvatarInfosContainer>
    </S.HeaderContainer>
  );
};

export default Header;
