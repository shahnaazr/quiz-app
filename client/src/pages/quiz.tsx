import React, { useContext, useEffect, useState } from "react";

import { TriviaContext } from "../contexts/TriviaContext";
import { useFetch, FetchProps } from "../hooks/use_fetch";
import { QuizQuestion, ExtendedQuizQuestion } from "../types/QuizQuestion";
import { decodeHtmlEntities, shuffleArray } from "../helpers";
import { Alert } from "../components/alert";
import { Loading } from "../components/loading";
import Category from "../components/category";
import QuestionNumber from "../components/question_number";
import Question from "../components/question";
import NextButton from "../components/next_button";
import AnswerOptions from "../components/answer_options";
import { shuffleArray } from "../utils/utils";
import { useNavigate } from 'react-router-dom';
import Timer from "../components/timer";
import img1 from "../assets/images/quiz-page/img1.svg"
import img2 from "../assets/images/quiz-page/img2.svg"
import img3 from "../assets/images/quiz-page/img3.svg"
import img4 from "../assets/images/quiz-page/img4.svg"
import img5 from "../assets/images/quiz-page/img5.svg"
 import img6 from "../assets/images/quiz-page/img6.svg"
 import img7 from "../assets/images/quiz-page/img7.svg"
 import img8 from "../assets/images/quiz-page/img8.svg"
 import img9 from "../assets/images/quiz-page/img9.svg"
 import img10 from "../assets/images/quiz-page/img10.svg"
import Image from "../components/image";

const Quiz: React.FC = () => {

  const apiHost = import.meta.env.VITE_API_HOST;
  const apiPort = import.meta.env.VITE_API_PORT;
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState("");
  const [resetTimer, setResetTimer] = useState(false);
  const triviaContext = useContext(TriviaContext)!;
  const { triviaParams, updateTriviaQuestions, triviaQuestions } = triviaContext;

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const apiUrl = `${apiHost}:${apiPort}${apiBaseUrl}?category=${triviaParams.category}&difficulty=${triviaParams.difficulty}`;
  const { data, loading, error }: FetchProps<QuizQuestion[]> = useFetch(apiUrl);

  const imageMap: Record<number, string>= {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6,
    7: img7,
    8: img8,
    9: img9,
    10: img10,

  };

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
  

  const handleAnswerSelection = (answer: string) => {
    triviaQuestions[questionIndex].answered = answer;
    setAnswered(answer);
    triviaQuestions[questionIndex].correct_answer === answer
      ? (triviaQuestions[questionIndex].value = 1)
      : (triviaQuestions[questionIndex].value = 0);
      setResetTimer(true);

  };

  const handleClick = () => {
    
    if (questionIndex === triviaQuestions.length - 1 && triviaQuestions[questionIndex].value === null) {
      navigate("/results");
    } else {
      setQuestionIndex(questionIndex + 1);
      setAnswered("");
      setResetTimer(true); 
    }
  };

  useEffect(() => {
    if (resetTimer) {
      const timeoutId = setTimeout(() => {
        setResetTimer(false);
      }, 100); 
      return () => clearTimeout(timeoutId);
    }
  }, [resetTimer]);


  const selectedImage = imageMap[questionIndex+1];

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
      {data && (
        <div>     
          <Category category={triviaQuestions[questionIndex]?.category}/>
          <div className="flex justify-between content-end items-end">
            {{selectedImage} &&<Image imageUrl={selectedImage}/>}
            <QuestionNumber questionIndex={questionIndex} totalNumberOfQuestions={triviaQuestions.length}/>
            {questionIndex < triviaQuestions.length && (
              <Timer onTimeout={handleClick} resetTimer={resetTimer} />
            )}
          </div>
          <div className="bg-secondary rounded-2xl ">
            <Question question={triviaQuestions[questionIndex]?.question}/>
            <AnswerOptions answers={triviaQuestions[questionIndex]?.answers} handleAnswerSelection={handleAnswerSelection}/>
        </div>
        <NextButton 
              questionIndex={questionIndex} 
              totalNumberOfQuestions={triviaQuestions.length} 
              handleNextQuestion={handleClick} 
              answered={!answered}
              />
        </div>
      )}
    </>
  );
};

export default Quiz;
