import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  border-top: 1px solid ${({ theme }) => theme.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  border-left: 1px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.background};
`;

export const Button = styled.button`
  border: none;
  padding: 20px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.cyan};

  ${({ theme, className }) => css`
    background-color: ${className === 'selected' ? theme.secondary : theme.background};
    color: ${className === 'selected' ? theme.colors.green : theme.colors.cyan};
  `}

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;
