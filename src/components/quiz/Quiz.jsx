import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { Card, Form } from "react-bootstrap";

import "./Quiz.css";

function Quiz() {
  const location = useLocation();
  const quizData = location.state;

  const categoryId = quizData.category.split(" ")[0];
  const [quizQuestions, setQuizQuestions] = useState([]);

  useEffect(() => {
    async function getQuestions() {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${quizData.difficulty}&type=multiple`,
          { timeout: 5000 }
        );
        setQuizQuestions(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    getQuestions();
  }, [categoryId, quizData.difficulty]);

  return (
    <div className="quiz-container">
      <div className="questions-container">
        {quizQuestions.map((ques, index) => (
          <Card className="question-card" key={index}>
            <Form>
              <Card.Header>Question #{index + 1}</Card.Header>
              <Card.Text>{ques.question}</Card.Text>
              {ques.incorrect_answers.map((answers, index) => (
                <Form.Check key={index} type="radio" label={answers} />
              ))}
              <Form.Check
                type="radio"
                id={ques.correct_answer}
                label={ques.correct_answer}
              />
            </Form>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
