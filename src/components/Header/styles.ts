import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0px 7px 8px 2px rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
`;

export const Title = styled.h1`
  display: flex;
  font-weight: 600;
  justify-content: center;
  font-size: 3rem;
  color: ${({ theme }) => theme.text};
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const AvatarImageContainer = styled.img`
  display: flex;
  border-radius: 50px;
`;

export const AvatarInfosContainer = styled.div`
  display: flex;
  margin-right: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.pink};
  font-weight: 600;
`;

export const Score = styled.p`
  color: ${({ theme }) => theme.colors.cyan};
  font-weight: 600;
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.orange};
  }
`;
