import React, { ReactNode } from "react";
import { TriviaProvider } from "../contexts/TriviaContext";
import { TriviaParams } from "../types/TriviaParams";

interface TriviaProviderProps {
  children: ReactNode;
  initialTriviaParams?: TriviaParams;
}

const TestingProvider: React.FC<TriviaProviderProps> = ({ children, initialTriviaParams }) => (
  <TriviaProvider initialTriviaParams={initialTriviaParams}>{children}</TriviaProvider>
);

export default TestingProvider;
