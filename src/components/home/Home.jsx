import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

import "./Home.css";

const difficulty = ["easy", "medium", "hard"];
const category = [
  {
    id: 9,
    name: "General Knowledge",
  },
  {
    id: 14,
    name: "Entertainment: Television",
  },
  {
    id: 15,
    name: "Entertainment: Video Games",
  },
  {
    id: 11,
    name: "Entertainment: Film",
  },
  {
    id: 12,
    name: "Entertainment: Music",
  },
];

// TODO: Figure out how to submit a form that will take in all of the states information from dropdowns and input values.
// TODO: Also figure a way to submit the information and open a new page.

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    category: "",
    difficulty: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    setData(e.target.name);
    navigate("/quiz-time", { state: data });
  };

  return (
    <div className="home-container">
      <Form className="form-container" onSubmit={handleSubmit}>
        <h1>Quiz Time!</h1>
        <Form.Group className="mb-3 form-group">
          <Form.Control
            className="form-control"
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="category-dropdown" className="form-group">
          <Form.Control
            className="form-control"
            as="select"
            name="category"
            value={data.category}
            onChange={handleChange}
          >
            <option value="" className="form-option">
              Select a Category
            </option>
            {category.map((cat) => (
              <option key={cat.id}>
                {cat.id} -{cat.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="difficulty-dropdown" className="form-group">
          <Form.Control
            className="form-control"
            as="select"
            name="difficulty"
            value={data.difficulty}
            onChange={handleChange}
          >
            <option value="" className="form-option">
              Select a Difficulty
            </option>
            {difficulty.map((opt, index) => (
              <option value={opt} key={index} className="form-option">
                {opt}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button type="submit" className="form-button">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Home;
