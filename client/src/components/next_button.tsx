// NextButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

type NextButtonProps = {
  questionIndex: number;
  totalNumberOfQuestions: number;
  handleNextQuestion: () => void;
  answered: boolean
};

const NextButton: React.FC<NextButtonProps> = ({ questionIndex, totalNumberOfQuestions, handleNextQuestion}, answered) => {
  const navigate = useNavigate()
  const handleFinishQuiz = () => {
    navigate("/results");
  };

  return (
    <div className='flex justify-end pb-6 pr-2'>
      {questionIndex < totalNumberOfQuestions - 1 ? (
        <button className="text-lg px-7 py-3 mt-3 bg-secondary hover:bg-secondaryHover hover:text-tertiary"  onClick={handleNextQuestion} disabled={!answered}> next »</button>
      ) : (
        <button className="text-lg px-7 py-3 mt-3  bg-secondary hover:bg-secondaryHover  hover:text-tertiary" onClick={handleFinishQuiz} disabled={!answered}>finish »</button>
      )}
    </div>
  );
};

export default NextButton;
