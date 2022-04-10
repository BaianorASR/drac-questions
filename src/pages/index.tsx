import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { validations } from '../shared/helpers/LoginValidation';
import { useAppDispatch } from '../shared/hooks/redux';
import { fetchToken } from '../shared/services/api';
import { wrapper } from '../store/index.store';
import * as A from '../store/reducers';
import * as S from '../styles/pages/Login';

type TLoginForm = {
  name: string;
  email: string;
};

const Login: NextPage = p => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { register, handleSubmit, watch } = useForm<TLoginForm>();
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  watch(value => setIsDisabled(validations(value)));

  const onSubmit: SubmitHandler<TLoginForm> = async data => {
    dispatch(A.actionSetUser(data));
    dispatch(A.actionSetToken(await fetchToken()));
    push('/game');
  };

  const redirectToSettings = () => push('/settings');

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>DracQuestions</S.Title>
        <S.InputContainer>
          <S.Label htmlFor="name">
            Name
            <S.Input {...register('name')} id="name" type="text" placeholder="username" />
          </S.Label>
          <S.Label htmlFor="gravatarEmail">
            Email
            <S.Input
              {...register('email')}
              id="email"
              type="email"
              placeholder="user@email.com"
            />
          </S.Label>
        </S.InputContainer>
        <S.ButtonsContainer>
          <S.Button disabled={isDisabled} type="submit">
            Play
          </S.Button>
          <S.Button type="button" onClick={redirectToSettings}>
            Configurações
          </S.Button>
        </S.ButtonsContainer>
      </S.Form>
    </S.Container>
  );
};

export default wrapper.withRedux(Login);
