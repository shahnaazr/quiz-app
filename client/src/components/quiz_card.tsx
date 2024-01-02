interface QuizCardProps {
  question: string;
  answers: Array<string>;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, answers }) => (
  <div className="card">
    <p className="card__text">{question}</p>
    <p className="card__text">{answers}</p>
  </div>
);

export default QuizCard;
