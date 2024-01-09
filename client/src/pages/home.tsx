import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TriviaContext } from "../contexts/TriviaContext";
import Categories from "../data/categories.json";
import brainLeft from "../assets/images/home/brain-left.svg"
import brainRight from "../assets/images/home/brain-right.svg"

const Home: React.FC = () => {
  const triviaContext = useContext(TriviaContext)!;
  const { updateTriviaParams, triviaParams } = triviaContext;

  const [category, setCategory] = useState(triviaParams.category);
  const [difficulty, setDifficulty] = useState(triviaParams.difficulty);

  const navigate = useNavigate();

  const handleStartQuiz = () => {
    updateTriviaParams?.({ category, difficulty });
    navigate("/quiz");
  };

  return (
    <>
      <h1 className="text-center text-3xl md:text-6xl  py-10">Quiz Night</h1>
      <form>
        <label>
        <h3 className="text-center mb-4 text-primary">Choose category:</h3>
          <select className="block mx-auto mb-10" value={category} onChange={(e) => setCategory(e.target.value)}>
            {Categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        
        <label>
        <h3 className="text-center mb-4 text-primary">Choose difficulty:</h3>
          <select className="block mx-auto mb-14" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
      
        <button type="button" className="block text-lg mb-5 mx-auto p-3 lg:p-4 bg-secondary hover:bg-secondaryHover" onClick={handleStartQuiz} data-testid="start-btn"> start quiz » 
        </button>

      </form>
      <div className="flex justify-between">
        <img className="w-28 md:w-52" src={brainLeft} alt="Smiling brain" /> 
        <img className="w-24 md:w-48" src={brainRight} alt="Thinking brain" width={93}/>
      </div>
    </>
  );
};

export default Home;
