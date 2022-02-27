import {
  Card,
  Container,
} from "react-bootstrap";
import beer from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Container>
      <Card className="mb-3">
        <Link to="/ListBeers">
          <Card.Img src={beer} />
        </Link>
        <Card.Body>
          <Card.Title>All Beers</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae
            consequatur et aliquam exercitationem voluptatum minus. Iusto, porro
            modi. Laborum est expedita perferendis labore.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Link to="/RandomBeer">
          <Card.Img src={randomBeer} />
        </Link>
        <Card.Body>
          <Card.Title>Random Beer</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae
            consequatur et aliquam exercitationem voluptatum minus. Iusto, porro
            modi. Laborum est expedita perferendis labore.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Link to="/NewBeer">
        <Card.Img src={newBeer} />
        </Link>
        <Card.Body>
          <Card.Title>New Beer</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae
            consequatur et aliquam exercitationem voluptatum minus. Iusto, porro
            modi. Laborum est expedita perferendis labore.
          </Card.Text>
        </Card.Body>
      </Card>

    </Container>
  );
}

export default HomePage;
