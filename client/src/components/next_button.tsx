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
  const navigate = useNavigate();
  
  const handleFinishQuiz = () => {
    navigate("/results");
  };

  return (
    <div>
      {questionIndex < totalNumberOfQuestions - 1 ? (
        <button className="block text-xl mb-10 mx-auto p-4 bg-secondary hover:bg-secondaryHover" onClick={handleNextQuestion} disabled={!answered}> next »</button>
      ) : (
        <button className="block text-xl mb-10 mx-auto p-4 bg-secondary hover:bg-secondaryHover" onClick={handleFinishQuiz} disabled={!answered}>finish »</button>
      )}
    </div>
  );
};

export default NextButton;
