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
          {index + 1}. {quizData.question}
        </h2>
      </div>
      <div className="card-answer">
        <h2>Answer: {quizData.correct_answer}</h2>
        <p>
          You answered:{" "}
          {quizData.answered ? quizData.answered : "Didn't Answer"}
          {answeredCorrect()}
        </p>
      </div>
    </div>
  );
};
