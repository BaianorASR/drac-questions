/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';

import { useAppSelector } from '../hooks/redux';
import { wrapper } from '../store/index.store';
import EndPageLayout from '../styles/layouts/EndPage';
import * as S from '../styles/pages/Feedback';

type FeedbackProps = {
  amount: number;
};

const Feedback: NextPage<FeedbackProps> = ({ amount }) => {
  const { assertions, name, score, gravatarEmail } = useAppSelector(
    state => state.player,
  );

  return (
    <EndPageLayout>
      <S.Title>
        Seu <span>Desempenho!</span>
      </S.Title>
      <S.Name>{name}</S.Name>
      <img src={gravatarEmail} alt="avatar" />
      <S.UserInfos>
        <S.Message assertions={assertions}>
          {assertions >= 3 ? 'Bom trabalho!' : 'Poderia ser melhor...'}
        </S.Message>
        <S.Score>
          Sua pontuação final foi <span>{score}</span>
        </S.Score>
        <S.Assertions>
          Você acertou <span>{assertions}</span>, de <span>{amount}</span> perguntas
        </S.Assertions>
      </S.UserInfos>
    </EndPageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  const {
    settings: { amount },
  } = store.getState();

  return { props: { amount } };
});

export default Feedback;
