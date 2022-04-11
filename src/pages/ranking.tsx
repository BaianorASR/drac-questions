/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { getLocalStorage, TUser } from '../helpers/storage';
import EndPageLayout from '../styles/layouts/EndPage';
import * as S from '../styles/pages/Ranking';

const Ranking: NextPage = () => {
  const [rankings, setRankings] = useState<TUser[]>();

  useEffect(() => {
    const sortedRankings = getLocalStorage().sort(
      (a: TUser, b: TUser) => b.score - a.score,
    );
    setRankings(sortedRankings);
  }, []);

  return (
    <EndPageLayout>
      <S.UL>
        {rankings?.map((each, i) => (
          <S.LI key={`${each.name}-${each.score}-${i}`}>
            <img src={each.picture} alt="avatar" />
            <S.Name>{each.name}</S.Name>
            <S.ScoreInfos>
              <S.Assertions>
                Assertions: <span>{each.assertions}</span>
              </S.Assertions>
              <S.Score>
                Score: <span>{each.score}</span>
              </S.Score>
            </S.ScoreInfos>
          </S.LI>
        ))}
      </S.UL>
    </EndPageLayout>
  );
};

export default Ranking;
