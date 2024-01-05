import React, { useContext, useEffect, useState } from "react";

import { TriviaContext } from "../contexts/TriviaContext";
import { useFetch, FetchProps } from "../hooks/use_fetch";
import { QuizQuestion, ExtendedQuizQuestion } from "../types/QuizQuestion";
import Category from "../components/category";
import QuestionNumber from "../components/question_number";
import Question from "../components/question";
import NextButton from "../components/next_button";
import AnswerOptions from "../components/answer_options";
import { shuffleArray } from "../utils/utils"

const Quiz: React.FC = () => {

  const apiHost = import.meta.env.VITE_API_HOST;
  const apiPort = import.meta.env.VITE_API_PORT;
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState("");
  const triviaContext = useContext(TriviaContext)!;
  const { triviaParams, updateTriviaQuestions, triviaQuestions } = triviaContext;

  const apiUrl = `${apiHost}:${apiPort}${apiBaseUrl}?category=${triviaParams.category}&difficulty=${triviaParams.difficulty}`;
  const { data, loading, error }: FetchProps<QuizQuestion[]> = useFetch(apiUrl);

  useEffect(() => {
    if (data) {
      const extendedData: ExtendedQuizQuestion[] = data.map((question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
        answered: null,
        value: null,
      }));
      updateTriviaQuestions(extendedData);
      console.log("Extended data:", extendedData);
    }
  }, [data]);

  const handleAnswerSelection = (answer: string) => {
    triviaQuestions[questionIndex].answered = answer;
    setAnswered(answer);
    triviaQuestions[questionIndex].correct_answer === answer
      ? (triviaQuestions[questionIndex].value = 1)
      : (triviaQuestions[questionIndex].value = 0);
  };

  const handleClick = () => {
    setQuestionIndex(questionIndex + 1);
    setAnswered("");
  };

  return (
    <>
      {loading && <p>Loading the quiz for you...</p>}
      {error && <p>An Error has encountered. Dtails of the the error can be found here - {error.message}</p>}
      {data && (
        <div>      
          <Category category={triviaQuestions[questionIndex]?.category}/>
          <QuestionNumber questionIndex={questionIndex} totalNumberOfQuestions={triviaQuestions.length}/>
          <Question question={triviaQuestions[questionIndex]?.question}/>
          <AnswerOptions answers={triviaQuestions[questionIndex]?.answers} handleAnswerSelection={handleAnswerSelection}/>
          <NextButton questionIndex={questionIndex} totalNumberOfQuestions={triviaQuestions.length} handleNextQuestion={handleClick} answered={!answered}/>
        </div>
      )}
    </>
  );
};

export default Quiz;
