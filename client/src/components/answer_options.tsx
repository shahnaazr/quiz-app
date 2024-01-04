// AnswerOptions.tsx
import React, { useState } from 'react';

type AnswerOptionsProps = {
    incorrect_answers: string[];
    correct_answer: string;

};

const AnswerOptions: React.FC<AnswerOptionsProps> = ({ incorrect_answers, correct_answer}) => {
  
  const [, setSelectedOption] = useState<string>('');
  
  const handleSelectedOption = (option: string) => {
    setSelectedOption(option); 
    const options = document.querySelectorAll('.answer-option');
    options.forEach((opt) => {
      if (opt.textContent === option) {
        opt.classList.add('selected');
      } else {
        opt.classList.remove('selected'); 
      }
    });
  };
  return (
    <div>
    {[...incorrect_answers, correct_answer].sort().map((option, index) => (
      <div key={index}>
        <button onClick={() => handleSelectedOption(option)}>{option}</button>
      </div>
    ))}
  </div>
  );
};

export default AnswerOptions;

