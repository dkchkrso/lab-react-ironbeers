import { Button, Form, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../assets/home.png";
import { useState } from "react";
import axios from "axios"; 

const APIurl_postNewBeer = "https://ih-beers-api2.herokuapp.com/beers/new";

function NewBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(1);
  const [contributed_by, setContributed_by] = useState("");
 
const handleSubmit = (e) => {
  e.preventDefault();
  // Body for the POST request

  const body = {
    name: name,
    tagline: tagline,
    description: description,
    first_brewed: first_brewed,
    brewers_tips: brewers_tips,
    attenuation_level: attenuation_level,
    contributed_by: contributed_by
  };

  axios
    .post(APIurl_postNewBeer, body)
    .then((response) => {
      console.log(response)
      // Reset the state
      setName("b");
      setTagline("b");
      setDescription("b");
      setFirst_brewed("b");
      setTagline("b");
      setBrewers_tips("b");
      setAttenuation_level(1);
      setContributed_by("b");
    });
};

  return (
    <Container>
      <Link to="/">
        <Card.Img src={Home} />
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            size="lg"
            type="text"
            placeholder="Name"
          />
          <Form.Text className="text-muted">
            Form text with classname "text muted"
          </Form.Text>
          <Form.Control
            name="tagline_id"
            onChange={(e) => setTagline(e.target.value)}
            id="tagline_id"
            size="lg"
            type="text"
            placeholder="tagline"
          />
          <Form.Control
            name="description_id"
            onChange={(e) => setDescription(e.target.value)}
            id="description_id"
            size="lg"
            type="text"
            placeholder="description"
          />
          <Form.Control
            name="first_brewed_id"
            onChange={(e) => setFirst_brewed(e.target.value)}
            id="first_brewed_id"
            size="lg"
            type="text"
            placeholder="first_brewed"
          />
          <Form.Control
            name="brewers_tips_id"
            onChange={(e) => setBrewers_tips(e.target.value)}
            id="brewers_tips_id"
            size="lg"
            type="text"
            placeholder="brewers_tips"
          />
          <Form.Control
            name="attenuation_level_id"
            onChange={(e) => setAttenuation_level(e.target.value)}
            id="attenuation_level_id"
            size="lg"
            type="number"
            placeholder="attenuation_level"
          />
          <Form.Control
            name="contributed_by_id"
            onChange={(e) => setContributed_by(e.target.value)}
            id="contributed_by_id"
            size="sm"
            type="text"
            placeholder="contributed_by"
          />
        </Form.Group>
        <Button type="submit" onSubmit={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default NewBeerPage;
