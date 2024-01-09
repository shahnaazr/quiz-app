// AnswerOptions.tsx
import React, { useState } from 'react';

type AnswerOptionsProps = {
    answers: string[];
    handleAnswerSelection: (answer: string) => void
};

const AnswerOptions: React.FC<AnswerOptionsProps> = ({ answers, handleAnswerSelection}) => {
  
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
    <ul className='pb-10'>
    {answers && [...answers].sort().map((option, index) => (
        <li key={index} className="text-center py-5 mb-2 mx-5 lg:mx-10 bg-tertiary hover:shadow-gold hover:bg-terinatyHover" onClick={() => {handleOptionSelection(option);handleAnswerSelection(option)}}>{option}</li>
    ))}
  </ul>
  );
};

export default AnswerOptions;

