// QuestionNumber.tsx
import React from 'react';

type QuestionNumberProps = {
  questionIndex: number;
  totalNumberOfQuestions: number;
};

const QuestionNumber: React.FC<QuestionNumberProps> = ({ questionIndex, totalNumberOfQuestions }) => {
  return <div  className="translate-y-6 flex items-center justify-center w-24 h-24 text-lg py-10 text-font bg-background border border-primary rounded-full shadow-gold"><p><span className='text-4xl'>{questionIndex + 1}</span>/{totalNumberOfQuestions}</p></div>;
};

export default QuestionNumber;
