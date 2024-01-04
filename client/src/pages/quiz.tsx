import React, { useContext } from "react";

import { TriviaContext } from "../contexts/TriviaContext";

const Quiz: React.FC = () => {
  const triviaContext = useContext(TriviaContext)!;
  const { triviaParams } = triviaContext;
  console.log(triviaParams);
  return (
    <>
      <h1>Quiz Page</h1>
    </>
  );
};

export default Quiz;
