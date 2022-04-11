import styled from 'styled-components';

export const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  padding: 25px;
  border-radius: 3px;
`;

export const Name = styled.h2`
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  letter-spacing: 3px;
`;

type TMessage = {
  assertions: number;
};

export const Message = styled.h3<TMessage>`
  color: ${({ theme, assertions }) =>
    assertions >= 3 ? theme.colors.green : theme.colors.red};
`;

export const Score = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.comment};

  span {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const Assertions = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.cyan};

  span {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Title = styled.h1`
  text-align: center;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  padding: 5px;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.green};
  span {
    color: ${({ theme }) => theme.colors.pink};
  }
`;
