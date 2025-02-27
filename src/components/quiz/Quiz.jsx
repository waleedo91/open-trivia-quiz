import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Quiz() {
  const location = useLocation();
  const quizData = location.state;
  const { data: questions, isLoading } = useFetch(
    `https://opentdb.com/api.php?amount=10&category=15&difficulty=${quizData.difficulty}&type=multiple`
  );

  console.log(questions);

  return <div>Quiz</div>;
}

export default Quiz;
