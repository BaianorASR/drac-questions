import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const QuestionContainer = styled.div`
  position: relative;
  display: flex;
  width: 600px;
  height: 500px;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 3px;
  box-shadow: 8px 8px 24px -2px rgba(0, 0, 0, 0.25);
`;

export const QuestionContainerText = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 95%;
  gap: 10px;
  flex-grow: 2;
`;

export const QuestionsCategory = styled.p`
  color: ${({ theme }) => theme.colors.green};
  background-color: ${({ theme }) => theme.background};
  border-radius: 3px;
  padding: 5px;
  font-weight: 600;
  font-size: 0.8rem;
  text-align: end;
  position: absolute;
  right: 10px;
  top: 10px;
`;
export const QuestionsText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.comment};
  font-weight: 700;
  background-color: ${({ theme }) => theme.background};
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 3px;
  padding: 5px;
  height: 100%;
`;

export const QuestionsOptionsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const ButtonAnswers = styled.button`
  font-weight: 500;
  background-color: ${({ theme, className }) => {
    switch (className) {
      case 'incorrect-answer':
        return theme.colors.red;
      case 'correct-answer':
        return theme.colors.green;
      default:
        return theme.colors.purple;
    }
  }};
  color: ${({ theme, className }) =>
    className === 'correct-answer' ? theme.secondary : theme.background};

  display: flex;
  justify-content: center;
  border-radius: 3px;
  border: none;
  width: 450px;
  padding: 15px;
  transition: all 0.2s ease;

  &:enabled:focus {
    outline: 2px solid ${({ theme }) => theme.colors.yellow};
  }
  &:enabled:hover {
    transform: scaleX(1.02);
    background-color: ${({ theme }) => theme.colors.pink};
    transition: all 0.2s ease;
  }
`;
