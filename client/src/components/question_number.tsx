// QuestionNumber.tsx
import React from 'react';

type QuestionNumberProps = {
  questionIndex: number;
  totalNumberOfQuestions: number;
};

const QuestionNumber: React.FC<QuestionNumberProps> = ({ questionIndex, totalNumberOfQuestions }) => {
  return <div  className="translate-y-6 flex items-center justify-center w-16 h-16 sm:w-28 sm:h-28 sm:text-lg  text-font bg-background border border-primary rounded-full shadow-gold"><p><span className='text-2xl sm:text-4xl'>{questionIndex + 1}</span>/{totalNumberOfQuestions}</p></div>;
};

export default QuestionNumber;
