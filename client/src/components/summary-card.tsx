import React from "react";
import "../css/summary/summary-card.css";
import { QuizData } from "../types/quizData.types";

interface CardProps {
  quizData: QuizData;
  index: number;
}

export const Card: React.FC<CardProps> = ({ quizData, index }) => {
  function answeredCorrect() {
    return quizData.answered == quizData.correct_answer ? "✅" : "❌";
  }

  return (
    <div className="card">
      <div className="card-question">
        <h2>
          Question {index + 1}: {quizData.question}
        </h2>
      </div>
      <div className="card-answer">
        <h2>Correct Answer: {quizData.correct_answer}</h2>
        <p>
          Your answer: {quizData.answered ? quizData.answered : "Didn't Answer"}
          {answeredCorrect()}
        </p>
      </div>
    </div>
  );
};
