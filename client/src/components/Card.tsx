import React from "react";
import "./Card.css";
import { QuizData } from "../types/data.types";

//todo: Get question and answer from context/obj

interface MyComponentProps {
  data: QuizData;
}

export const Card: React.FC<MyComponentProps> = ({ data }) => {
  return (
    <div className="card">
      <div className="card-question">
        <h2>Question: {data.question}</h2>
      </div>
      <br />
      <div className="card-answer">
        <h2>Correct Answer: {data.correct_answer}</h2>
      </div>
    </div>
  );
};
