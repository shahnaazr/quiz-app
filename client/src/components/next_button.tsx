// NextButton.tsx
import React from 'react';

type NextButtonProps = {
  currentQuestionNumber: number;
  totalNumberOfQuestions: number;
};

const NextButton: React.FC<NextButtonProps> = ({ currentQuestionNumber, totalNumberOfQuestions}) => {

  const handleNextQuestion = () => {

  }

  return (
    <div>
      {currentQuestionNumber < totalNumberOfQuestions - 1 ? (
        <button onClick={handleNextQuestion}>Next</button>
      ) : (
        <button onClick={handleNextQuestion}>Finish</button>
      )}
    </div>
  );
};

export default NextButton;
