import { Form, Button } from "react-bootstrap";

import "./Home.css";

const category = ["Video Game", "Movies", "Development"];
const difficulty = ["Easy", "Medium", "Hard", "Expert"];

function Home() {
  return (
    <>
      <Form className="form-container">
        <div className="form-group">
          <Form.Group className="mb-3 " controlId="firstName">
            <Form.Control
              type="text"
              placeholder="Enter your First Name"
              className="form-input"
            />
          </Form.Group>
          <Form.Select className="form-select" aria-label="Select Category">
            <option>Select Category</option>
            {category.map((cat, index) => (
              <option key={index} value={index}>
                {cat}
              </option>
            ))}
          </Form.Select>
          <br />
          <Form.Select className="form-select" aria-label="Select Difficulty">
            <option>Select Difficulty</option>
            {difficulty.map((dif, index) => (
              <option key={index} value={index}>
                {dif}
              </option>
            ))}
          </Form.Select>
          <br />
          <div className="button-container">
            <Button className="form-button">Submit</Button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default Home;
