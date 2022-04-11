import styled from 'styled-components';

import login from '../../assets/images/login.svg';

export const Container = styled.div`
  background-image: url(${login});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  min-height: 700px;
  overflow: hidden;
`;

export const Form = styled.form`
  display: flex;
  margin-left: 100px;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  height: 500px;
  background-color: ${props => props.theme.secondary};
  box-shadow: 12px 11px 34px -6px rgba(0, 0, 0, 0.25);
`;

export const One = styled.div`
  color: ${({ theme }) => theme.colors.cyan};
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const Two = styled.div`
  color: ${({ theme }) => theme.text};
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const Three = styled.div`
  color: ${({ theme }) => theme.text};
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const Title = styled.h1`
  display: flex;
  font-weight: 600;
  justify-content: center;
  font-size: 5rem;

  .text {
    position: relative;
  }

  .top {
    clip-path: inset(58% 0 0 0);
  }

  .bottom {
    clip-path: inset(0 0 41% 0);
  }

  .glitch {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .collision-tutor {
    color: transparent;
  }
`;

export const FormTitle = styled.h2`
  text-align: center;
  letter-spacing: 5px;
  font-weight: 300;
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
`;

export const InputContainer = styled.div`
  display: flex;
  width: 350px;
  margin: 0 auto;
  gap: 20px;
  flex-direction: column;
  text-align: center;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  margin: auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 3px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.pink};
  }

  &::placeholder {
    color: ${({ theme }) => theme.secondary};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    font-size: 1rem;
    -webkit-text-fill-color: ${({ theme }) => theme.text};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.background} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  gap: 5px;
`;

type TButton = {
  play?: boolean;
};

export const Button = styled.button<TButton>`
  flex-basis: ${({ play }) => (play ? '65%' : '35%')};
  border: none;
  background-color: ${({ theme }) => theme.background};
  color: white;
  padding: 10px;
  margin-top: 10px;
  width: 300px;
  border-radius: 3px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  &:disabled {
    opacity: 0.5;
  }

  &:hover:enabled {
    transition: all 0.3s ease-in-out;
    background-color: ${({ play, theme }) =>
      play ? theme.colors.pink : theme.colors.purple};
    color: ${({ theme }) => theme.background};
  }
`;
