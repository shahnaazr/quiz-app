import React, { createContext, useState, ReactNode } from "react";

import { TriviaParams } from "../types/TriviaParams";
import { ExtendedQuizQuestion } from "../types/QuizQuestion";

interface TriviaContextProps {
  triviaParams: TriviaParams;
  updateTriviaParams: (newParams: TriviaParams) => void;
  triviaQuestions: ExtendedQuizQuestion[];
  updateTriviaQuestions: (newQuestions: ExtendedQuizQuestion[]) => void;
}

const TriviaContext = createContext<TriviaContextProps | undefined>(undefined);

interface TriviaProviderProps {
  children: ReactNode;
  initialTriviaParams?: TriviaParams;
}

const TriviaProvider: React.FC<TriviaProviderProps> = ({ children }) => {
  const [triviaParams, setTriviaParams] = useState({
    amount: 10,
    type: "multiple",
    difficulty: "medium",
    category: "9",
  });

  const [triviaQuestions, setTriviaQuestions] = useState<ExtendedQuizQuestion[]>([]);

  const updateTriviaParams = (newParams: TriviaParams) => {
    setTriviaParams((prevParams) => ({ ...prevParams, ...newParams }));
  };

  const updateTriviaQuestions = (newQuestions: ExtendedQuizQuestion[]) => {
    setTriviaQuestions(newQuestions);
  };

  const contextValue: TriviaContextProps = {
    triviaParams,
    updateTriviaParams,
    triviaQuestions,
    updateTriviaQuestions,
  };

  return <TriviaContext.Provider value={contextValue}>{children}</TriviaContext.Provider>;
};

export { TriviaProvider, TriviaContext };
