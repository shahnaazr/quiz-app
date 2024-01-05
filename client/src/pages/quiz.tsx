import React, { useContext, useEffect, useState } from "react";

import { TriviaContext } from "../contexts/TriviaContext";
import { useFetch, FetchProps } from "../hooks/use_fetch";
import { QuizQuestion, ExtendedQuizQuestion } from "../types/QuizQuestion";
import { decodeHtmlEntities, shuffleArray } from "../helpers";
import { Alert } from "../components/alert";
import { Loading } from "../components/loading";
import { Link } from "react-router-dom";

const Quiz: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState("");
  const triviaContext = useContext(TriviaContext)!;
  const { triviaParams, updateTriviaQuestions, triviaQuestions } = triviaContext;
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const apiUrl = `http://localhost:3000/trivia?category=${triviaParams.category}&difficulty=${triviaParams.difficulty}`;
  const { data, loading, error }: FetchProps<QuizQuestion[]> = useFetch(apiUrl);

  useEffect(() => {
    if (data) {
      if (data.length === 0) {
        setErrorMessage(`Oops! We didn't find any questions for ${triviaParams.categoryName} at
            ${triviaParams.difficulty} level.`);
        return;
      }

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

  const handleAnswerChange = (answer: string) => {
    const updatedQuestions = [...triviaQuestions];

    updatedQuestions[questionIndex] = {
      ...updatedQuestions[questionIndex],
      answered: answer,
      value: updatedQuestions[questionIndex].correct_answer === answer ? 1 : 0,
    };

    setAnswered(answer);
    updateTriviaQuestions(updatedQuestions);
    console.log(answer, updatedQuestions);
  };

  const handleClick = () => {
    setQuestionIndex(questionIndex + 1);
    setAnswered("");
  };

  return (
    <>
      <h1>Quiz Page</h1>
      {loading && <Loading caption="Loading Questions" />}
      {(error || errorMessage) && (
        <Alert
          status="error"
          message={errorMessage || (error && error.message) || "Unknown error"}
        />
      )}
      {data && !errorMessage && (
        <div>
          <h3>
            {triviaQuestions[questionIndex]?.category}{" "}
            <small>({triviaQuestions[questionIndex]?.difficulty})</small>
          </h3>
          <p
            dangerouslySetInnerHTML={{
              __html: decodeHtmlEntities(triviaQuestions[questionIndex]?.question),
            }}
          />
          <form>
            {triviaQuestions[questionIndex]?.answers.map((answer, index) => (
              <div key={answer}>
                <label>
                  <input
                    type="radio"
                    name={`answer${questionIndex}-${index}`}
                    checked={answer === answered}
                    value={answer}
                    onChange={() => handleAnswerChange(answer)}
                  />
                  {decodeHtmlEntities(answer)}
                </label>
              </div>
            ))}
            <button type="button" onClick={handleClick} disabled={!answered}>
              Next
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Quiz;
