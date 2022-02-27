import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Home from "../assets/home.png";

function RandomBeerPage() {
  return (
    <div>
      <Link to="/">
        <Card.Img src={Home} />
      </Link>
      RandomBeer - A Random Beer page to display a Random Beer
    </div>
  );
}

export default RandomBeerPage;
