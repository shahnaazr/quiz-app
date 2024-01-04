import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import TestingProvider from "../providers/TestingProvider";
import Home from "../pages/home";
import { MemoryRouter, Routes, Route } from "react-router-dom";

jest.mock("../contexts/TriviaContext", () => {
  const originalModule = jest.requireActual("../contexts/TriviaContext");
  return {
    ...originalModule,
    useContext: jest.fn(),
  };
});

describe("Home Component", () => {
  it("navigates to Quiz when Start Quiz button is clicked", async () => {
    const mockUpdateTriviaParams = jest.fn();
    (require("../contexts/TriviaContext") as any).useContext.mockReturnValue({
      updateTriviaParams: mockUpdateTriviaParams,
    });

    render(
      <TestingProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<div data-testid="quiz-page" />} />
          </Routes>
        </MemoryRouter>
      </TestingProvider>
    );

    fireEvent.change(screen.getByLabelText("Category:"), { target: { value: "10" } });
    fireEvent.change(screen.getByLabelText("Difficulty:"), { target: { value: "hard" } });

    fireEvent.click(screen.getByTestId("start-btn"));

    await waitFor(() => {
      expect(screen.getByTestId("quiz-page")).toBeInTheDocument();
    });
  });
});
