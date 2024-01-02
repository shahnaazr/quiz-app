import { Card } from "../components/Card";
import "./Summary.css";
import React from "react";

/* const mock_questions = {
  results: [
    {
      question:
        "Which one of these characters was first introduced in Sonic Boom: Rise of Lyric?",
      correct_answer: "Sticks the Badger",
      answers: [
        "Sticks the Badger",
        "Mighty the Armadillo",
        "Espio the Chameleon",
        "Rouge the Bat",
      ],
      selected_answer: 0,
    },
    {
      question: "fdg?",
      correct_answer: "Sticks the dfg",
      answers: [
        "Sticks the dfg",
        "Mighty the dfg",
        "Espio the gdf",
        "Rouge the dfg",
      ],
      selected_answer: 0,
    },
  ],
}; */

export function Summary() {
  return (
    <div className="summary">
      <h1>Score:</h1>
      <h2>8/10</h2>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
