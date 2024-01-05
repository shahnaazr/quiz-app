// Question.tsx
import React from 'react';

type QuestionProps = {
  question: string;
};

const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <div>
      <h2>{ question }</h2>
    </div>
  );
};

export default Question;
