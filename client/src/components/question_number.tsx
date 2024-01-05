// QuestionNumber.tsx
import React from 'react';

type QuestionNumberProps = {
  questionIndex: number;
  totalNumberOfQuestions: number;
};

const QuestionNumber: React.FC<QuestionNumberProps> = ({ questionIndex, totalNumberOfQuestions }) => {
  return <p  className="text-primary">{questionIndex + 1}/{totalNumberOfQuestions}</p>;
};

export default QuestionNumber;
