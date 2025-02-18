import { FloatingLabel, Form } from "react-bootstrap";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="form-container">
        <FloatingLabel controlId="floatingInput" className="mb-3 ">
          <Form.Control
            type="text"
            placeholder="First Name"
            className="form-input"
          />
        </FloatingLabel>
        <Form.Select aria-label="Default select example" className="form-input">
          <option>Select Category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
    </div>
  );
}

export default Home;
