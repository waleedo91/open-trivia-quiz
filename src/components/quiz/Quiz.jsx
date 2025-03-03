import { useState, useEffect } from "react";

import { data, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Quiz() {
  const location = useLocation();
  const quizData = location.state;

  const categoryId = quizData.category.split(" ")[0];
  const [quizQuestions, setQuizQuestions] = useState([]);
  
  return (
    <div>
      <ul></ul>
    </div>
  );
}

export default Quiz;
