import styled from 'styled-components';

import dev from '../../assets/images/development.svg';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  background-image: url(${dev});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  min-height: 700px;
`;
