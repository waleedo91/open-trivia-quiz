import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { Button, Card, Form } from "react-bootstrap";

import "./Quiz.css";

function Quiz() {
  const location = useLocation();
  const quizData = location.state;

  const categoryId = quizData.category.split(" ")[0];
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

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

  const updateAnswers = () => {
    quizQuestions.incorrect_answers.map((answer) => setAnswers(answer));
    console.log(answers);
  };

  updateAnswers();

  return (
    <Form>
      {/* {quizQuestions.map((quizQuestions, index) => (
        console.log(qui)
      ))} */}
    </Form>
  );
}

export default Quiz;

/* <div className="quiz-container">
      <div className="questions-container">
        <Form>
          {quizQuestions.map((ques, index) => (
            <Card className="question-card" key={index}>
              <Card.Header>Question #{index + 1}</Card.Header>
              <Card.Text>{ques.question}</Card.Text>
              {ques.incorrect_answers.map((answers, index) => (
                <Form.Check
                  key={index}
                  name={`answer ${index}`}
                  type="radio"
                  label={answers}
                  // onChange={handleChange}
                />
              ))}
              <Form.Check
                type="radio"
                name={`answer ${index}`}
                id={ques.correct_answer}
                label={ques.correct_answer}
                // onChange={handleChange}
              />
            </Card>
          ))}
          <Button className="quiz-button" type="submit">
            Submit!
          </Button>
        </Form>
      </div>
    </div> */










    <>
      <Form onSubmit={handleSubmit}>
        {questions.map((question, i) => (
          <Form.Group key={i}>
            <h6>Question #{i + 1}</h6>
            <p>{question.question}</p>
            {question.answers.map((answer, index) => (
              <Form.Check
                key={index}
                type="radio"
                name={answer}
                label={answer}
              />
            ))}
          </Form.Group>
        ))}
        <Button type="submit">Submit!</Button>
      </Form>
    </>