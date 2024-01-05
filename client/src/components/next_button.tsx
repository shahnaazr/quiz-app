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
        <button onClick={handleNextQuestion} disabled={!answered}>Next</button>
      ) : (
        <button onClick={handleFinishQuiz} disabled={!answered}>Finish</button>
      )}
    </div>
  );
};

export default NextButton;
