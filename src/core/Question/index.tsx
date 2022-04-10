import { NextPage } from 'next';
import React from 'react';

type QuestionProps = {
  index: number;
};

const Question: NextPage<QuestionProps> = ({ index }) => {
  return <div>{index}</div>;
};

export default Question;
