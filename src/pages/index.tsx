import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import titleAnimation from '../anime/title';
import { validations } from '../helpers/LoginValidation';
import { useAppDispatch } from '../hooks/redux';
import { wrapper } from '../store/index.store';
import * as A from '../store/reducers';
import * as S from '../styles/pages/Login';

type TLoginForm = {
  name: string;
  email: string;
};

const Login: NextPage = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { register, handleSubmit, watch } = useForm<TLoginForm>();
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  watch(value => setIsDisabled(validations(value)));

  const onSubmit: SubmitHandler<TLoginForm> = async data => {
    dispatch(A.actionResetPlayer());
    dispatch(A.actionSetUser(data));
    dispatch(A.thunkGetToken());
    push('/game');
  };

  useEffect(() => {
    titleAnimation();
  }, []);

  const redirectToSettings = () => push('/settings');

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormTitle>LOGIN</S.FormTitle>
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
          <S.Button play disabled={isDisabled} type="submit">
            Play
          </S.Button>
          <S.Button type="button" onClick={redirectToSettings}>
            Configurações
          </S.Button>
        </S.ButtonsContainer>
      </S.Form>
      {/* <S.Title>
        Drac<span>Questions</span>
      </S.Title> */}
      <S.Title>
        <div className="text">
          <S.One className="collision-tutor">
            drac<span>Question</span>
          </S.One>
          <S.Two id="top" className="glitch top">
            drac<span>Question</span>
          </S.Two>
          <S.Three id="bottom" className="glitch bottom">
            drac<span>Question</span>
          </S.Three>
        </div>
      </S.Title>
    </S.Container>
  );
};

export default wrapper.withRedux(Login);
