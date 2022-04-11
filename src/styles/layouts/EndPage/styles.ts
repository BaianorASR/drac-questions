import styled from 'styled-components';

import login from '../../../assets/images/login.svg';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  min-height: 700px;
  background-image: url(${login});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;
  height: 80%;
  width: 80%;
  justify-content: center;
  align-content: center;
`;

export const InfosContainer = styled.div`
  overflow-x: scroll;
  width: 70%;
  gap: 50px;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  border-top-left-radius: 0;
  background-color: ${({ theme }) => theme.secondary};
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;
