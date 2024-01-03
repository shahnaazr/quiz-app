import { Card } from "../components/Card";
import TotalScore from "../components/Score";
import "./Summary.css";

import React from "react";

export function Summary() {
  const mockData = [
    {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question: "What direction does the Statue of Liberty face?",
      correct_answer: "Southeast",
      incorrect_answers: ["Southwest", "Northwest", "Northeast"],
      answers: ["Southwest", "Northwest", "Northeast", "Southeast"],
      answered: null,
      value: null,
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question: "What direction does the Statue of Liberty face?",
      correct_answer: "Southeast",
      incorrect_answers: ["Southwest", "Northwest", "Northeast"],
      answers: ["Southwest", "Northwest", "Northeast", "Southeast"],
      answered: "Northwest",
      value: 0,
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "General Knowledge",
      question: "What direction does the Statue of Liberty face?",
      correct_answer: "Southeast",
      incorrect_answers: ["Southwest", "Northwest", "Northeast"],
      answers: ["Southwest", "Northwest", "Northeast", "Southeast"],
      answered: "Southeast",
      value: 1,
    },
  ];

  return (
    <div className="summary">
      <div className="score">
        <TotalScore data={mockData} />
      </div>
      <div className="cards">
        {mockData.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </div>
  );
}
