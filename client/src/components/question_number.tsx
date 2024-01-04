// QuestionNumber.tsx
import React from 'react';

type QuestionNumberProps = {
  currentQuestion: number;
  totalQuestions: number;
};

const QuestionNumber: React.FC<QuestionNumberProps> = ({ currentQuestion, totalQuestions }) => {
  return <p>{currentQuestion + 1}/{totalQuestions}</p>;
};

export default QuestionNumber;
