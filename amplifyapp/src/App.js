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
  const [url, setUrl] = useState();
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    console.log(data);
    const response = await axios.get(
      `https://44vek2rvvh.execute-api.us-west-2.amazonaws.com/dev/ask?prompt=${data}`
    );

    console.log(response);
    setLoading(false);
    setUrl(response.data.url);
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

        <Button variant="info" onClick={handleSubmit}>
          Create Image
        </Button>
      </Form>
      <div style={{ marginTop: "50px" }}>
        {!isLoading ? (
          <Image src={url} height={500} width={500}  />
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
