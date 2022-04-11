import { NextPage } from 'next';

import { useAppSelector } from '../../hooks/redux';
import * as S from './styles';

const Header: NextPage = () => {
  const { gravatarEmail, name, score } = useAppSelector(state => state.player);

  return (
    <S.HeaderContainer>
      <S.AvatarImageContainer src={gravatarEmail} alt="avatar" />
      <S.Title>
        Drac<span>Questions</span>
      </S.Title>
      <S.AvatarInfosContainer>
        <S.Name>{name}</S.Name>
        <S.Score>
          Score: <span>{score}</span>
        </S.Score>
      </S.AvatarInfosContainer>
    </S.HeaderContainer>
  );
};

export default Header;
