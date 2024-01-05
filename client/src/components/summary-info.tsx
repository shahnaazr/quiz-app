import React, { useMemo } from "react";
import { QuizData } from "../types/quizData.types";
import firstIcon from "../assets/images/summary/first.svg";
import secondIcon from "../assets/images/summary/second.svg";
import thirdIcon from "../assets/images/summary/third.svg";

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

  function getIcon() {
    if (totalScore >= quizData.length * 0.7) {
      return firstIcon;
    } else if (totalScore >= quizData.length * 0.3) {
      return secondIcon;
    }
    return thirdIcon;
  }

  //todo: Replace your name with the entered name in the program...
  return (
    <div className="summaryInfo">
      <div className="info box">
        {/* <h2>Your Name, </h2> */}
        <h2 className="highlighted text-2xl">YOU SCORE: </h2>
        <h2 className="score text-7xl">
          {totalScore}/{quizData.length}
        </h2>
      </div>
      <div className="summary-icon box">
        <img src={getIcon()} alt="" width="200" height="200" />
      </div>
    </div>
  );
};
