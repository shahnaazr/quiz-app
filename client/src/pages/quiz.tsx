import React, { useContext, useEffect, useState } from "react";

import { TriviaContext } from "../contexts/TriviaContext";
import { useFetch, FetchProps } from "../hooks/use_fetch";
import { QuizQuestion, ExtendedQuizQuestion } from "../types/QuizQuestion";

const Quiz: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState("");
  const triviaContext = useContext(TriviaContext)!;
  const { triviaParams, updateTriviaQuestions, triviaQuestions } = triviaContext;

  const apiUrl = `http://localhost:3000/trivia?category=${triviaParams.category}&difficulty=${triviaParams.difficulty}`;
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

  const shuffleArray = (array: any[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleAnswerChange = (answer: string) => {
    const updatedQuestions = [...triviaQuestions]; // Create a copy of the array

    updatedQuestions[questionIndex] = {
      ...updatedQuestions[questionIndex],
      answered: answer,
      value: updatedQuestions[questionIndex].correct_answer === answer ? 1 : 0,
    };

    setAnswered(answer);
    updateTriviaQuestions(updatedQuestions); // Update the context with the new array
    console.log(answer, updatedQuestions);
  };

  const handleClick = () => {
    setQuestionIndex(questionIndex + 1);
    setAnswered("");
  };

  const decodeHtmlEntities = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <>
      <h1>Quiz Page</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
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
