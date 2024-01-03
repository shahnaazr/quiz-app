import React from "react";
import { QuizData } from "../types/data.types";

interface MyComponentProps {
  data: QuizData[];
}

const TotalScore: React.FC<MyComponentProps> = ({ data }) => {
  const sumScore = (arr: QuizData[]): number => {
    let total = 0;

    arr.forEach((obj) => {
      if (obj.value == 1) {
        total += 1;
      }
    });

    return total;
  };

  const totalCorrect = sumScore(data);

  return (
    <div className="showScore">
      <h1>Score: </h1>
      <h2>
        {totalCorrect}/{data.length}
      </h2>
    </div>
  );
};

export default TotalScore;
