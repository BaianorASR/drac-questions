import { FC, ReactNode } from 'react';

import Aside from '../../../components/Aside';
import * as S from './styles';

type EndPageLayoutProps = {
  children: ReactNode | ReactNode[];
};

const EndPageLayout: FC<EndPageLayoutProps> = ({ children }) => {
  return (
    <S.Container>
      <S.MainContainer>
        <Aside />
        <S.InfosContainer>{children}</S.InfosContainer>
      </S.MainContainer>
    </S.Container>
  );
};

export default EndPageLayout;
