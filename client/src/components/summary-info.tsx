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
    <div className="flex justify-center items-center" data-testid="summary-info">
      <div>
        {/* <h2>Your Name, </h2> */}
        <p className="text bg-secondary text-font sm:text-xl px-2 py-2 m-2 mr-2 md:mr-10 uppercase sm:bg-tertiary sm:text-primary" data-testid="score-label">
           Your score:
        </p>
        <p className="text-sm sm:text-xl text-font px-5" data-testid="score">
          <span className="text-5xl sm:text-7xl">{totalScore}</span>/{quizData.length}
        </p>
      </div>
      <div>
        <img src={getIcon()} alt="Score Brain" width="170" />
      </div>
    </div>
  );
};
