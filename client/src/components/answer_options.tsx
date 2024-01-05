// AnswerOptions.tsx
import React, { useState } from 'react';

type AnswerOptionsProps = {
    answers: string[];


};

const AnswerOptions: React.FC<AnswerOptionsProps> = ({ answers}) => {
  
  const [, setSelectedOption] = useState<string>('');
  
  const handleOptionSelection = (option: string) => {
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
    {[...answers].sort().map((option, index) => (
      <div key={index}>
        <button onClick={() => handleOptionSelection(option)}>{option}</button>
      </div>
    ))}
  </div>
  );
};

export default AnswerOptions;

