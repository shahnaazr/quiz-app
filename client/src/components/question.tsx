// Question.tsx
import React from 'react';

type QuestionProps = {
  question: string;
};

const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <div>
      <p className="text-center py-5 mb-2 pt-16 mx-5 lg:mx-10">{ question }</p>
    </div>
  );
};

export default Question;
