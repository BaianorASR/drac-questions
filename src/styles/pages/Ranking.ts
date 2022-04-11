import styled from 'styled-components';

export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const LI = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  width: 100%;
  height: 130px;
  gap: 100px;
  background-color: ${({ theme }) => theme.background};
  transition: all 0.3 ease;

  &:hover {
    transition: all 0.3 ease;
    transform: scaleX(1.01);
    background-color: #2b2d3a;
    box-shadow: 0px 0px 43px -4px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 100px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.purple};
  }
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.colors.green};
  font-weight: 700;
`;

export const ScoreInfos = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const Assertions = styled.p`
  color: ${({ theme }) => theme.colors.orange};

  span {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const Score = styled.p`
  color: ${({ theme }) => theme.comment};

  span {
    color: ${({ theme }) => theme.colors.cyan};
  }
`;
