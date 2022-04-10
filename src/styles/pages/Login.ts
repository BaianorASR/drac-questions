import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Form = styled.form`
  display: flex;
  margin-left: 100px;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 500px;
  background-color: ${props => props.theme.secondary};
  gap: 40px;
`;

export const Title = styled.h1`
  display: flex;
  font-weight: 600;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 350px;
  margin: 0 auto;
  gap: 10px;
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
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background-color: ${props => props.theme.background};
  color: white;
  padding: 10px;
  margin-top: 10px;
  width: 300px;
  border-radius: 3px;
  font-weight: bold;

  &:disabled {
    opacity: 0.5;
  }

  &:hover:enabled {
    background-color: ${props => props.theme.colors.pink};
    color: ${props => props.theme.background};
  }
`;
