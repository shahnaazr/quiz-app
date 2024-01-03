import { Card } from "../components/Card";
import "./Summary.css";
import React from "react";
import TotalScore from "../components/Score";

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
