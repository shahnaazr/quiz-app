import { QuizData } from "../types/quizData.types";

interface CardProps {
  quizData: QuizData;
  index: number;
}

export const Card: React.FC<CardProps> = ({ quizData, index }) => {
  function answeredCorrect() {
    return quizData.answered == quizData.correct_answer ? "✅ " : "❌ ";
  }

  return (
    <div className="text-sm mb-6" data-testid="question">
      <p className="text-primary font-bold mb-2">
        {index + 1}. {quizData.question}
      </p>
      <p className="mb-1">
        {answeredCorrect()} 
        You answered:{" "}
        {quizData.answered ? quizData.answered : "Didn't Answer"}
      </p>
      <p className="text-success">Correct answer: {quizData.correct_answer}</p>
    </div>
  );
};
