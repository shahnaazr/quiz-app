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
    triviaQuestions[questionIndex].answered = answer;
    setAnswered(answer);
    triviaQuestions[questionIndex].correct_answer === answer
      ? (triviaQuestions[questionIndex].value = 1)
      : (triviaQuestions[questionIndex].value = 0);
    console.log(answer, triviaQuestions);
  };

  const handleClick = () => {
    setQuestionIndex(questionIndex + 1);
    setAnswered("");
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
          <p>{triviaQuestions[questionIndex]?.question}</p>
          <form>
            {triviaQuestions[questionIndex]?.answers.map((answer, _index) => (
              <div key={answer}>
                <label>
                  <input
                    type="radio"
                    name={`answer${questionIndex}`}
                    value={answer}
                    onChange={() => handleAnswerChange(answer)}
                  />
                  {answer}
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
