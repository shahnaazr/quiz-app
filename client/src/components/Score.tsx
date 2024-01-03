import React from "react";

interface MyObject {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
  answered: string | null;
  value: number | null;
  // todo: value is presumably whether the score was correct or not? Need to check
}

interface MyComponentProps {
  data: MyObject[];
}

const TotalScore: React.FC<MyComponentProps> = ({ data }) => {
  const sumScore = (arr: MyObject[]): number => {
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
      <h2>{totalCorrect}/10</h2>
    </div>
  );
};

export default TotalScore;
