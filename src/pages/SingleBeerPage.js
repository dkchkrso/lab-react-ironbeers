import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Home from "../assets/home.png";

function SingleBeerPage() {
  return (
    <div>
      <Link to="/">
        <Card.Img src={Home} />
      </Link>
      SingleBeer - A Single Beer page to display the details of the beer the
      user clicked on
    </div>
  );
}

export default SingleBeerPage;
