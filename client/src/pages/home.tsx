import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TriviaContext } from "../contexts/TriviaContext";
import Categories from "../data/categories.json";

const Home: React.FC = () => {
  const triviaContext = useContext(TriviaContext)!;
  const { updateTriviaParams } = triviaContext;

  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("medium");

  const navigate = useNavigate();

  const handleStartQuiz = () => {
    updateTriviaParams?.({ category, difficulty });
    navigate("/quiz");
  };

  return (
    <>
      <h1>Home Page</h1>
      <form>
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {Categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Difficulty:
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={handleStartQuiz} data-testid="start-btn">
          Start Quiz
        </button>
      </form>
    </>
  );
};

export default Home;
