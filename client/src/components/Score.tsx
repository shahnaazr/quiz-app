import React, { useMemo } from "react";
import { QuizData } from "../types/data.types";

interface MyComponentProps {
  data: QuizData[];
}

export const TotalScore: React.FC<MyComponentProps> = ({ data }) => {
  const totalScore = useMemo(() => {
    let total = 0;
    data.forEach((d) => {
      total += d.value ?? 0;
    });

    return total;
  }, [data]);

  return (
    <div className="showScore">
      <h1>Score: </h1>
      <h2>
        {totalScore}/{data.length}
      </h2>
    </div>
  );
};
