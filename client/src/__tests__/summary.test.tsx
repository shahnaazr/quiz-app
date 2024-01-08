import "@testing-library/jest-dom";
import { Summary } from "../pages/summary";
import { render, screen } from "@testing-library/react";
import { TriviaContext } from "../contexts/TriviaContext";
import React from "react";
import { useNavigate } from "react-router-dom";

const navigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: jest.fn(() => navigate),
  };
});

describe("Summary", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("should render summary page with 1 card", () => {
    const updateTriviaParams = jest.fn();
    const updateTriviaQuestions = jest.fn();
    const triviaParams = {
      amount: 1,
      type: "multiple",
      difficulty: "easy",
      category: "9",
    };

    render(
      <TriviaContext.Provider
        value={{
          triviaQuestions: [
            {
              type: "",
              difficulty: "",
              category: "",
              question: "test question",
              correct_answer: "a",
              incorrect_answers: ["b", "c", "d"],
              answers: ["a", "b", "c", "d"],
              answered: "a",
              value: 1,
            },
          ],
          triviaParams,
          updateTriviaQuestions,
          updateTriviaParams,
        }}
      >
        <Summary />
      </TriviaContext.Provider>
    );
    const summary = screen.getByTestId("summary");
    expect(summary).toBeInTheDocument();
    const question = screen.getByText("1. test question");
    expect(question).toBeInTheDocument();
    expect(useNavigate).toHaveBeenCalledTimes(1);
    //expect(navigate).toHaveBeenCalledWith("/")
  });
});
