import { Card } from "../components/summary-card";
import { SummaryInfo } from "../components/summary-info";
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
    <div data-testid="summary">
      <h1 className="text-center text-primary  text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-5">Summary</h1>

      <div className="sm:bg-secondary">
        <SummaryInfo quizData={triviaQuestions} />
      </div>
      <br />
      <h1 className="text-2xl mb-5">Correct Answers</h1>
      <div className="">
        {triviaQuestions.map((quizData, index) => (
          <Card key={index} quizData={quizData} index={index} />
        ))}
      </div>
      <div className="pb-10">
        <button
          type="button"
          className="block text-xl lg:text-2xl mx-auto py-2 px-4 lg:p-6 bg-secondary hover:bg-secondaryHover"
          onClick={sendToHomepage}
          data-testid="home-btn"
        >
          new quiz »
        </button>
      </div>
    </div>
  );
};
