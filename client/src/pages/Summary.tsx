import { Card } from "../components/Card";
import { SummaryInfo } from "../components/SummaryInfo";
import "./Summary.css";
import React from "react";

export function Summary() {
  //todo: replace mock data with real data
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
      <div className="summary-info">
        <SummaryInfo quizData={mockData} />
      </div>
      <div className="cards">
        {mockData.map((quizData, index) => (
          <Card quizData={quizData} index={index} />
        ))}
      </div>
      <br />
      <button onClick={sendToHomepage}>New Quiz</button>
    </div>
  );
}

function sendToHomepage() {
  alert("Let's pretend this took you back to the homepage... :)");
  //todo: Link to homepage
}
