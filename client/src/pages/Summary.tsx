import { Card } from "../components/summary-card";
import { SummaryInfo } from "../components/summary-info";
import "../css/summary/summary.css";
import { TriviaContext } from "../contexts/TriviaContext";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Summary: React.FC = () => {
  const { triviaQuestions } = useContext(TriviaContext)!;
  const navigate = useNavigate();

  function sendToHomepage() {
    navigate("/");
  }

  return (
    <div className="summary" data-testid="summary">
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
      <button
        type="button"
        className="block text-xl lg:text-2xl mb-5 mx-auto p-4 lg:p-6 bg-secondary hover:bg-secondaryHover"
        onClick={sendToHomepage}
        data-testid="home-btn"
      >
        Home
      </button>
    </div>
  );
};
