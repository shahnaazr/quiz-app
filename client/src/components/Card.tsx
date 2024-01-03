import React from "react";
import "./Card.css";
import { QuizData } from "../types/quizData.types";

interface MyComponentProps {
  quizData: QuizData;
}

export const Card: React.FC<MyComponentProps> = ({ quizData }) => {
  function answeredCorrect() {
    return quizData.answered == quizData.correct_answer ? "✅" : "❌";
  }

  return (
    <div className="card">
      <div className="card-question">
        <h2>Question: {quizData.question}</h2>
      </div>
      <div className="card-answer">
        <h2>
          Correct Answer: {quizData.correct_answer}
          {answeredCorrect()}
        </h2>
      </div>
    </div>
  );
};
