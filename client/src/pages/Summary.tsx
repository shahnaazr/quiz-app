import { Card } from "../components/summary-card";
import { SummaryInfo } from "../components/summary-info";
import "../css/summary/summary.css";
import { TriviaContext } from "../contexts/TriviaContext";
import React, { useContext } from "react";

export const Summary: React.FC = () => {
  const { triviaQuestions } = useContext(TriviaContext)!;

  return (
    <div className="summary">
      <h1 className="text-center text-7xl py-10">Summary</h1>
      <br />
      <div className="summary-info">
        <SummaryInfo quizData={triviaQuestions} />
      </div>
      <br />
      <h1 className="text-2xl">Correct Answers</h1>
      <div className="cards">
        {triviaQuestions.map((quizData, index) => (
          <Card key={index} quizData={quizData} index={index} />
        ))}
      </div>
      <br />
      <button onClick={sendToHomepage}>New Quiz</button>
    </div>
  );
};

function sendToHomepage() {
  alert("Let's pretend this took you back to the homepage... :)");
  //todo: Link to homepage
}
