import { NextPage } from 'next';
import React, { useContext, useEffect, useState } from 'react';

import { TimerContext } from '../../context/Timer';
import { sum } from '../../helpers/sum';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import * as A from '../../store/reducers';
import type { TQuestion } from '../../types/api';
import * as S from './styles';

type QuestionProps = {
  index?: number;
  question: TQuestion;
};

type TSortedQuestion = string[];

const Question: NextPage<QuestionProps> = ({ question }) => {
  const [sortedQuestion, setSortedQuestion] = useState<TSortedQuestion>([]);
  const isSelectedAnswer = useAppSelector(state => state.game.isSelectedAnswer);
  const dispatch = useAppDispatch();
  const { timer } = useContext(TimerContext);

  useEffect(() => {
    const allQuestions = [...question.incorrect_answers, question.correct_answer].sort(
      () => Math.random() - 0.5,
    );
    setSortedQuestion(allQuestions.sort(() => Math.random() - 0.5));
  }, [question.correct_answer, question.incorrect_answers]);

  const sumScore = () => {
    dispatch(A.actionSetScore(sum(question.difficulty, timer)));
  };

  const handleAnswerClick = () => {
    dispatch(A.actionSetIsSelectedAnswer());
  };

  const changeClass = (answer: string) => {
    if (isSelectedAnswer) {
      return answer === question.correct_answer ? 'correct-answer' : 'incorrect-answer';
    }
    return '';
  };

  return (
    <S.Container>
      <S.QuestionContainer>
        <S.QuestionContainerText>
          <S.QuestionsCategory>{question?.category}</S.QuestionsCategory>
          <S.QuestionsText>{question?.question}</S.QuestionsText>
        </S.QuestionContainerText>
        <S.QuestionsOptionsContainer>
          {sortedQuestion.map(answer => (
            <S.ButtonAnswers
              key={answer} // eslint-disable-line react/no-array-index-key
              type="button"
              disabled={isSelectedAnswer}
              className={changeClass(answer)}
              onClick={() => {
                handleAnswerClick();
                if (answer === question.correct_answer) sumScore();
              }}
            >
              {answer}
            </S.ButtonAnswers>
          ))}
        </S.QuestionsOptionsContainer>
      </S.QuestionContainer>
    </S.Container>
  );
};

export default Question;
