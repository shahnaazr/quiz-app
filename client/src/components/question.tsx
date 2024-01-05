// Question.tsx
import React from 'react';

type QuestionProps = {
  currentQuestionNumber: number;
  question: string;
};

const Question: React.FC<QuestionProps> = ({ currentQuestionNumber, question }) => {
  return (
    <div>
      <h1>Question {currentQuestionNumber + 1}</h1>
      <h2>{ question }</h2>
    </div>
  );
};

export default Question;
