// QuestionNumber.tsx
import React from 'react';

type QuestionNumberProps = {
  currentQuestionNumber: number;
  totalNumberOfQuestions: number;
};

const QuestionNumber: React.FC<QuestionNumberProps> = ({ currentQuestionNumber, totalNumberOfQuestions }) => {
  return <p>{currentQuestionNumber + 1}/{totalNumberOfQuestions}</p>;
};

export default QuestionNumber;
