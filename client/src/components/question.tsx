// Question.tsx
import React from 'react';

type QuestionProps = {
  currentQuestion: number;
  question: string;
};

const Question: React.FC<QuestionProps> = ({ currentQuestion, question }) => {
  return (
    <div>
      <h1>Question {currentQuestion + 1}</h1>
      <h2 dangerouslySetInnerHTML={{ __html: question }} />
    </div>
  );
};

export default Question;
