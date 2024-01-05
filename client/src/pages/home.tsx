import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TriviaContext } from "../contexts/TriviaContext";
import Categories from "../data/categories.json";

const Home: React.FC = () => {
  const triviaContext = useContext(TriviaContext)!;
  const { updateTriviaParams, triviaParams } = triviaContext;

  const [category, setCategory] = useState(triviaParams.category);
  const [categoryName, setCategoryName] = useState(triviaParams.categoryName);
  const [difficulty, setDifficulty] = useState(triviaParams.difficulty);

  const navigate = useNavigate();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const selectedLabel = selectedOption.text;
    setCategory(e.target.value);
    setCategoryName(selectedLabel);
  };

  const handleStartQuiz = () => {
    updateTriviaParams?.({ category, categoryName, difficulty });
    navigate("/quiz");
  };

  return (
    <>
      <h1>Home Page</h1>
      <form>
        <label>
          Category:
          <select value={category} onChange={handleSelectChange}>
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
