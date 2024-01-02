import React from "react";
import "./Card.css";

export function Card() {
  return (
    <div className="card">
      <div className="card-question">
        <h2>Question: ---</h2>
      </div>
      <br />
      <div className="card-answer">
        <h2>Correct Answer: ---</h2>
      </div>
    </div>
  );
}
