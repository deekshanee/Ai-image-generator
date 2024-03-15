import logo from "./logo.svg";
import "./App.css";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [data, setData] = useState();
  const [response, setResponse] = useState("");
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    console.log(data);
    const response = await axios.get(
      `https://44vek2rvvh.execute-api.us-west-2.amazonaws.com/dev/business-bedrock-knowledgebase/ask?prompt=${data}`
    );

    console.log(response);
    setLoading(false);
    setResponse(response.data.body);
  };
  const handleChange = (value) => {
    setData(value);
  };
  return (
    <div className="App">
      <h1>I Can help you to start a good Business :)</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>What are you thinking of?</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e.target.value)}
            as="textarea"
            rows={3}
          />
        </Form.Group>

        <Button disabled={isLoading} variant="info" onClick={handleSubmit}>
          Surpise me!!
        </Button>
      </Form>
      <div style={{ marginTop: "50px" }}>
        {!isLoading ? (
          response
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
    </div>
  );
}

export default App;
