import styled from 'styled-components';

type TContainerProps = {
  timer: number;
};

export const Container = styled.div<TContainerProps>`
  background-color: ${({ theme }) => theme.secondary};
  width: fit-content;
  padding: 15px;
  margin: 10px;
  box-shadow: 0px 0px 23px -2px rgba(0, 0, 0, 0.25);
  transition: all 1.5s ease-in-out;
  font-weight: 500;
  border: 3px solid
    ${({ theme, timer }) => {
      switch (true) {
        case timer < 7:
          return theme.colors.red;
        case timer <= 15:
          return theme.colors.orange;
        default:
          return theme.colors.green;
      }
    }};

  span {
    font-weight: 700;
    transition: all 1.5s ease-in-out;

    color: ${({ theme, timer }) => {
      switch (true) {
        case timer < 7:
          return theme.colors.red;
        case timer <= 15:
          return theme.colors.orange;
        default:
          return theme.text;
      }
    }};
  }
`;
