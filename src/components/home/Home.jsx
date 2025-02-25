import { useState } from "react";

import { Form, Button, Dropdown } from "react-bootstrap";

import "./Home.css";

const category = ["Video Game", "Movies", "Development"];
const difficulty = ["Easy", "Medium", "Hard", "Expert"];

// TODO: Figure out how to submit a form that will take in all of the states information from dropdowns and input values.
// TODO: Also figure a way to submit the information and open a new page.

function Home() {
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
    console.log(data);
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
            {category.map((opt, index) => (
              <option value={opt} key={index} className="form-option">
                {opt}
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
