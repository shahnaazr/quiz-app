import React, { useMemo } from "react";
import { QuizData } from "../types/quizData.types";

interface MyComponentProps {
  quizData: QuizData[];
}

export const SummaryInfo: React.FC<MyComponentProps> = ({ quizData }) => {
  const totalScore = useMemo(() => {
    let total = 0;
    quizData.forEach((d) => {
      total += d.value ?? 0;
    });

    return total;
  }, [quizData]);

  //todo: Replace your name with the entered name in the program...
  return (
    <div className="summaryInfo">
      <h1>Your Name, </h1>
      <h1>You Scored: </h1>
      <h2 className="showScore">
        {totalScore}/{quizData.length}
      </h2>
    </div>
  );
};
